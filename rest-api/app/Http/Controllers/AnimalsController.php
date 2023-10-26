<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    private $animals = ['cat', 'dog'];
    public function index()
    {
        return $this->animals;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        array_push($this->animals, $request->animal);
        return $this->animals;
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $this->animals[$id] = $request->animal;
        return $this->animals;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        unset($this->animals[$id]);
        return $this->animals;
    }
}
