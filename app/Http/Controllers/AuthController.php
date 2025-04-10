<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\CreateAuthRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function create(CreateAuthRequest $request)
    {
        $validated = $request->validated();

        if (Auth::attempt($validated)) {
            $request->session()->regenerate();

            return response()->json(['message' => 'login succeeded']);
        }

        return response()->json(['message' => 'login failed']);
    }

    public function destroy(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'logout succeeded']);
    }
}
