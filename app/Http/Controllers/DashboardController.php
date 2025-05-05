<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\File;
use App\Models\Employee;
use App\Models\Announcement;

class DashboardController extends Controller
{
   
    public function index()
    {
        $files = File::latest()->take(15)->get()->map(function ($file) {
            $file->file_path = asset('storage/' . $file->filepath);
            return $file;
        }); 
        
        $employees = Employee::latest()->take(15)->get()->map(function ($emp) {
            return $emp;
        });
        $announcements = Announcement::latest()->take(15)->get()->map(function ($announce) {
            return $announce;
        });

        return Inertia::render('Dashboard', [
            'files' => $files,
            'employees' => $employees,
            'announcements' => $announcements,
        ]);
    }
            
}
