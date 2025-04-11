<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DirectoryController;
use App\Http\Controllers\TokenController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// users
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);

Route::get('/users/{user}', [UserController::class, 'show']);
Route::put('/users/{user}', [UserController::class, 'update']);
Route::patch('/users/{user}', [UserController::class, 'update']);
Route::delete('/users/{user}', [UserController::class, 'destroy']);

// auth
Route::get('/auth/user', [AuthController::class, 'show']);
Route::post('/auth/login', [AuthController::class, 'create']);
Route::post('/auth/logout', [AuthController::class, 'destroy']);

// directory
Route::get('/domains', [DirectoryController::class, 'getDomains']);
