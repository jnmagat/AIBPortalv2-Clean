<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
use App\Models\Account;

class AccountDocument extends Model
{
    protected $fillable = [
        'customerID',
        'accountNumber',
        'documentID',
        'documentName',
        'documentType',
        'filePath',
    ];

    // Relationship to Customer using customerID
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customerID', 'customerID');
    }

    // Relationship to Account using accountNumber
    public function account()
    {
        return $this->belongsTo(Account::class, 'accountNumber', 'accountNumber');
    }
}
