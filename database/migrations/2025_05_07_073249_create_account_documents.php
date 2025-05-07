<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('account_documents', function (Blueprint $table) {
            $table->id();
            $table->string('customerID');
            $table->string('accountNumber');
            $table->string('documentID')->unique();
            $table->string('documentName');
            $table->string('documentType');
            $table->string('filePath');
            $table->timestamp('uploaded_at')->useCurrent();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_documents');
    }
};
