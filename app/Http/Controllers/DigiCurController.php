<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
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
    
    public function displayAccounts(Request $request, $customerID) {
        $accounts = Account::where('customerID', $customerID)->paginate(10);
        $customer = Customer::where('customerID', $customerID)->firstOrFail();
       
        return Inertia::render('DigiCur/AccountList', [
            'accounts' => $accounts,
            'customerID' => $customerID,
            'customer' => $customer,   
            'selectedType' => $request->query('type'), 
        ]);
    }

    public function showAccountDocuments($customerID, $accountNumber) {
        $customer = Customer::where('customerID', $customerID)->firstOrFail();
        $account = Account::where('accountNumber', $accountNumber)->firstOrFail();
        // Fetch documents where both customerID and accountNumber match
            $documents = AccountDocument::where('customerID', $customerID)
            ->where('accountNumber', $accountNumber)
            ->get();
        // Return the documents (You can pass this to a view or Inertia)
        return Inertia::render('DigiCur/AccountDocuments', [
            'account' => $account,
            'customer' => $customer,
            'documents' => $documents,
        ]);
    }

    public function uploadDocument(Request $request) {
        $request->validate([
            'documentType' => 'required|string',
            'documentName' => 'required|string',
            'file' => 'required|file|mimes:pdf,jpg,png,docx',
            'customerID' => 'required|string',
            'accountNumber' => 'required|string',
        ]);
    
        $path = $request->file('file')->store('documents', 'public');
    
        $documentID = Str::uuid()->toString(); // Generate unique ID
        AccountDocument::create([
            'customerID' => $request->customerID,
            'accountNumber' => $request->accountNumber,
            'documentID' => $documentID,
            'documentName' => $request->documentName,
            'documentType' => $request->documentType,
            'filePath' => '/storage/' . $path,
            'uploaded_at' => now(),
        ]);
    
        return redirect()->back()->with('success', 'Document uploaded successfully.');
    }
        
}
