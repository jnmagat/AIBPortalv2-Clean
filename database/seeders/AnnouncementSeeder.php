<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Announcement;

class AnnouncementSeeder extends Seeder
{
    public function run()
    {
        // Create 15 announcements
        Announcement::factory()->count(15)->create();
    }
}
