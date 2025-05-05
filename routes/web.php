<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DigiCurController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/files/create', [FileController::class, 'create'])->name('files.create');
    Route::post('/files', [FileController::class, 'store'])->name('files.store');
    Route::get('/files', [FileController::class, 'index'])->name('files.index'); 
    Route::get('/files/{file}/download', 
          [FileController::class, 'download'])
     ->name('files.download');
     Route::get('/files/{company}/{filetype}', [FileController::class, 'byType'])->name('files.byType');

     Route::get('/DigiCur/home', [DigiCurController::class, 'index'])->name('digicur.home');
     Route::get('/records', [DigiCurController::class, 'displayAccounts'])->name('digicur.records');

    
    
});




require __DIR__.'/auth.php';
