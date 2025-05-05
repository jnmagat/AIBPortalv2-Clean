<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Account;

class DigiCurController extends Controller
{
    public function index()
    {
        return Inertia::render('DigiCur/Home');
    }

    public function displayAccounts(Request $request) {
        $type = $request->input('type', 'SA');

        $accounts = Account::where('accountType', $type)
            ->paginate(7)
            ->withQueryString(); 
        return Inertia::render('DigiCur/Records', [
            'accounts' => $accounts,
            'selectedType' => $type,
        ]);
    }
        
}
