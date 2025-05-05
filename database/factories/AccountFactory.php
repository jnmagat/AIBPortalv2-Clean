<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class AccountFactory extends Factory
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
            'accountType' => $accountType,
            'accountNumber' => $accountNumber,
            'currentBalance' => $this->faker->numberBetween(1000, 100000),
            'lastTransaction' => $this->faker->dateTimeThisYear(),
        ];
    }
}
