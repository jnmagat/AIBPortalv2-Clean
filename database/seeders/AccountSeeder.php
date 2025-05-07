<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Account;
use App\Models\Customer;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create 50 customers first
        $customers = Customer::factory()->count(50)->create(); // Ensure customers exist

        // Create accounts and link them to the customers
        foreach ($customers as $customer) {
            Account::factory()->create([
                'customerID' => $customer->customerID,  // Link to existing customerID
            ]);
        }
    }
}
