<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
   
});



Route::namespace('Api')->group(function(){

  Route::Resource('todoList', 'TodoListController'); 
  Route::get('List', 'TodoListController@List');
  Route::get('task/{id}', 'TodoListController@task'); 
    /*Route::get('todoList', 'TodoListController@index');
    Route::post('todoList', 'TodoListController@store');
    Route::put('todoList', 'TodoListController@update');
    Route::delete('todoList', 'TodoListController@destroy');*/

   /* Route::post("create-user", "UserController@createUser");
    Route::get("user-detail", "UserController@userDetail");*/
    Route::get('ListUser','TodoListController@ListUser')  ;

  
    
});


