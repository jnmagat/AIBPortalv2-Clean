<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\Account;
use App\Models\AccountDocument;


class AccountDocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $accounts = Account::with('customer')->take(20)->get();

        foreach ($accounts as $account) {
            // Create the directory if it doesn't exist
            $directoryPath = 'documents/' . $account->accountNumber;
            if (!Storage::exists($directoryPath)) {
                Storage::makeDirectory($directoryPath);
            }
    
            // Now create documents for each account
            AccountDocument::create([
                'customerID' => $account->customer->customerID,
                'accountNumber' => $account->accountNumber,
                'documentID' => Str::uuid(),
                'documentName' => 'Bank Statement',
                'documentType' => 'Statement',
                'filePath' => $directoryPath . '/bank_statement.pdf', // Use the dynamically created path
                'uploaded_at' => now(),
            ]);
    
            // Additional documents
            AccountDocument::create([
                'customerID' => $account->customer->customerID,
                'accountNumber' => $account->accountNumber,
                'documentID' => Str::uuid(),
                'documentName' => 'Account Opening Form',
                'documentType' => 'Form',
                'filePath' => $directoryPath . '/account_opening.pdf', // Use the dynamically created path
                'uploaded_at' => now(),
            ]);
        }
    }
}
