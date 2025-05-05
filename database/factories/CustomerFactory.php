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
        $accountType = $this->faker->randomElement(['SA', 'CA']);
        $accountNumber = $accountType === 'SA'
            ? (int) ('05' . $this->faker->unique()->numberBetween(1000000, 9999999))
            : (int) ('00' . $this->faker->unique()->numberBetween(1000000, 9999999));

        return [
            'firstName' => $this->faker->firstName,
            'middleName' => $this->faker->firstName,
            'lastName' => $this->faker->lastName,
            'bankCode' => '1212121',
            'branch' => (string) $this->faker->numberBetween(1, 10),
            'age' => $this->faker->numberBetween(18, 80),
            'accountNumber' => $accountNumber,
        ];
    }
}
