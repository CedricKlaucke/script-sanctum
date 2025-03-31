<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class DirectoryController extends Controller
{
    public function getDomains()
    {
        $path = resource_path('js/domains');

        $domains = collect(File::directories($path))->filter(function ($dir) {
            return File::exists($dir . '/routes.ts');
        })->map(function ($dir) {
            return basename($dir);
        })->values();

        return response()->json(['domains' => $domains]);
    }
}
