<?php

namespace App\Http\Controllers\Ajax;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }

    public function moveToHistory(int $id, Request $request)
    {
        $article = Article::findOrFail($id);
        return $article->delete();
    }
}
