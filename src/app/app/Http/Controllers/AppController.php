<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class AppController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function history()
    {
        return view('history');
    }

    public function analytics()
    {
        $categories = Category::withCount('articles')->get();

        $names = $categories->map(function($category){
            return $category->name;
        });

        $counts = $categories->map(function ($category) {
            return $category->articles_count;
        });

        $colors = $categories->map(function () {
            foreach (array('r', 'g', 'b') as $color) {
                $rgbColor[$color] = mt_rand(0, 255);
            }

            return sprintf("rgba(%s, %s, %s, 0.2)",$rgbColor['r'], $rgbColor['g'], $rgbColor['b']);
        });

        return view('analytics', [
            'names' => $names,
            'counts' => $counts,
            'colors' => $colors
        ]);
    }

    public function notifications()
    {
        return view('notifications');
    }
}
