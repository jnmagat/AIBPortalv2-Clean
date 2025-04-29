<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\File;


class FileController extends Controller
{

    public function index()
    {
        $files = File::latest()->get()->map(function ($file) {
            $file->file_path = asset('storage/' . $file->filepath);
            return $file;
        });

        return Inertia::render('Files/Index', [
            'files' => $files,
        ]);
    }
        

    public function create()
    {
        return Inertia::render('Files/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file',
            'filetype' => 'required|in:OO,MEMO,MAN,REP',
            'company' => 'required|in:CSC,BSP,AIB',
        ]);

        $path = $request->file('file')->store('uploads', 'public');

        File::create([
            'file_name' => $request->file('file')->getClientOriginalName(),
            'file_path'  => $path,               
            'file_type' => $request->filetype,
            'company'   => $request->company,
        ]);

        return redirect()->route('dashboard')->with('success', 'File uploaded successfully!');
    }

    public function download(File $file)
    {
        if (! Storage::disk('public')->exists($file->file_path)) {
            abort(404, 'File not found on disk.');
        }
    
        return Storage::disk('public')
                      ->download($file->file_path, $file->file_name);
    }

    public function byType($company, $filetype)
    {
        $files = File::where('company', $company)
                    ->where('file_type', $filetype)
                    ->latest()
                    ->get();
                    
        return inertia('Files/FilteredList', [
            'files' => $files,
            'company' => $company,
            'filetype' => $filetype,
        ]);
    }
}
