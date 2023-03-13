<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // fill in data into Clients table - one record
        DB::table('clients')->insert(
            [
                'name' => Str::random(8) . ' ' . Str::random(14),
                'email' => Str::random(8) . '@gmail.com',
                'address' => Str::random(8) . 'street' . Str::random(14)
            ]
        );
        // using Factory
        Client::factory()->count(15)->create();
    }
}
