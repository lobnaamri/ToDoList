<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class TodoController extends Controller    
{
    //auth middleware

    public function __construct() {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Todo $todo) {
		// get all the Todo List based on current user id
		$allTodoList = $todo->whereIn('user_id', $request->user())->with('user');
		$todolist = $allTodoList->orderBy('created_at', 'desc')->take(10)->get();
		// return json response
		return response()->json([
			'todolist' => $todolist,
		]);
	}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validate
		$this->validate($request, [
			'name' => 'required|max:255',
		]);
		// create a new task 
		$todo = $request->user()->todolist()->create([
			'name' => $request->name,
		]);
		
		return response()->json($todo->with('user')->find($todo->id));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $todo = Todo::findOrFail($id);
		return response()->json([
			'todo' => $todo,
		]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $input = $request->all();
		$todo = Todo::findOrFail($id);
		$todo->update($input);
		return response()->json($todo->with('user')->find($todo->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        Task::findOrFail($id)->delete();
    }
}
