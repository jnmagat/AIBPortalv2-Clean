<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstName',
        'middleName',
        'lastName',
        'bankCode',
        'branch',
        'age',
        'accountNumber',
    ];

    // Optional: relate back to account
    public function account()
    {
        return $this->belongsTo(Account::class, 'accountNumber', 'accountNumber');
    }
}
