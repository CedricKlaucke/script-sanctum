<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DirectoryController;
use App\Http\Controllers\TokenController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// users
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);

Route::get('/users/{user}', [UserController::class, 'show']);
Route::put('/users/{user}', [UserController::class, 'update']);
Route::patch('/users/{user}', [UserController::class, 'update']);
Route::delete('/users/{user}', [UserController::class, 'destroy']);

// auth
Route::post('/auth/login', [AuthController::class, 'create']);
Route::post('/auth/logout', [AuthController::class, 'destroy']);

// token
Route::post('/tokens/create', [TokenController::class, 'index']);

// directory
Route::get('/domains', [DirectoryController::class, 'getDomains']);
