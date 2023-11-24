<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller{
    public function login(Request $request){

    }
    public function register(Request $request){
        try{
            $validatedData = $request->validate([
                "name" => "string",
                "email"=> "email|unique:users,email",
                "password" => "string"
            ]);
        }
        catch(\Exception $e){
            return $e->getMessage();
        }

        $user = new User([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
        ]);

        $user->save();

        return  [
            'message' => 'user created',
            'data' => $user,
        ];
    }
}


