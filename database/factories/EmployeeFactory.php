<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    protected $model = Employee::class;

    public function definition()
    {
        return [
            'f_name' => $this->faker->firstName(),
            'l_name' => $this->faker->lastName(),
            'm_name' => $this->faker->lastName(),
            'age' => $this->faker->numberBetween(18, 60),
            'department' => $this->faker->word(),
            'position' => $this->faker->word(),
        ];
    }
}
