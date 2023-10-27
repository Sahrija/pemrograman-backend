<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();
        return $students;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'string',
            'nim' => 'string',
            'email' => 'string',
            'jurusan' => 'string',
        ]);

        $student = new Student([
            'nama' => $request->input('nama'),
            'nim' => $request->input('nim'),
            'email' => $request->input('email'),
            'jurusan' => $request->input('jurusan'),
        ]);

        $student->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        $request->validate([
            'nama' => 'string',
            'nim' => 'string',
            'email' => 'string',
            'jurusan' => 'string',
        ]);

        $student->update([
            'nama' => $request->input('nama') ?? $student->nama,
            'nim' => $request->input('nim') ?? $student->nim,
            'email' => $request->input('email') ?? $student->email,
            'jurusan' => $request->input('jurusan') ?? $student->jurusan,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();
    }
}
