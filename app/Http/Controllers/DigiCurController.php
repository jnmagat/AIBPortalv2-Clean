<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Account;
use App\Models\Customer;
use App\Models\AccountDocument;

class DigiCurController extends Controller
{
    public function index()
    {
        return Inertia::render('DigiCur/Home');
    }
   
    public function displayCustomers(Request $request) {
        $type = $request->input('type', 'SA');

        $accounts = Account::with('customer')
            ->where('accountType', $type)
            ->paginate(7)
            ->withQueryString();
        return Inertia::render('DigiCur/Records', [
            'accounts' => $accounts,
            'selectedType' => $type,
        ]);
    }
    
    public function displayAccounts($customerID) {
        $accounts = Account::where('customerID', $customerID)->paginate(10);
        $customer = Customer::where('customerID', $customerID)->firstOrFail();
        return Inertia::render('DigiCur/AccountList', [
            'accounts' => $accounts,
            'customerID' => $customerID,
            'customer' => $customer,
        ]);
    }

    public function showAccountDocuments($customerID, $accountNumber) {
        $customer = Customer::where('customerID', $customerID)->firstOrFail();
        // Fetch documents where both customerID and accountNumber match
            $documents = AccountDocument::where('customerID', $customerID)
            ->where('accountNumber', $accountNumber)
            ->get();

        // Return the documents (You can pass this to a view or Inertia)
        return Inertia::render('DigiCur/AccountDocuments', [
            'customer' => $customer,
            'documents' => $documents,
        ]);
    }
        
}
