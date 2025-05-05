<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        'accountType',
        'accountNumber',
        'currentBalance',
        'lastTransaction',
    ];

    // Optional: if you want to relate to Customer via accountNumber
    public function customer()
    {
        return $this->hasOne(Customer::class, 'accountNumber', 'accountNumber');
    }
}
