<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Todo;
use App\User;


class TodoListController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        return Todo::all();
    }

    public function List()
    {
       $user=Auth::user();
              
        dd($user);

    }

    public function ListUser(){

        return $user = User::all();  
        
     }

    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // 
      return  Todo::create($request->all());
               
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // return Todo::find($user_id);
        $user = User::find($id);      
        $todo = Todo::where('user_id', $user->id)->get();
        return $todo;
    }
    public function task($id)
        {

            //$todo=Todo::all();
            $todo = Todo::where('id', $id)->get();
            return $todo;
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
       $todo = Todo::find($id);
       $todo->update($request->all());
       return $todo;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        return Todo::destroy($id);
    }
}
