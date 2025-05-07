<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class CustomerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Generate a random 5-digit number for customerID (e.g., 12345, 67890)
        $customerID = str_pad($this->faker->numberBetween(10000, 99999), 5, '0', STR_PAD_LEFT);

        return [
            'firstName' => $this->faker->firstName,
            'middleName' => $this->faker->firstName,
            'lastName' => $this->faker->lastName,
            'customerID' => $customerID, // Random 5-digit customerID
            'bankCode' => '1212121',
            'branch' => (string) $this->faker->numberBetween(1, 10),
            'age' => $this->faker->numberBetween(18, 80),
        ];
    }
}
