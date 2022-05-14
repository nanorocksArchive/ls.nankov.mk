<?php

namespace App\Http\Controllers\Ajax;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;

class ArticlesController extends Controller
{
    public function index()
    {
        return Article::with('categories')->paginate(1);
    }
}
