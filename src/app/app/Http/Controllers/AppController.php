<?php

namespace App\Http\Controllers;

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
        return view('analytics');
    }

    public function notifications()
    {
        return view('notifications');
    }
}
