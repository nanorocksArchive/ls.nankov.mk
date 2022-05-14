<?php

namespace App\Http\Controllers\Ajax;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{

    public function index(Request $request)
    {
        if (!is_null($request->query('word'))) {
            return Article::select('*')->join('articles_categories', 'articles_categories.article_id', '=', 'articles.id')
                ->join('categories', 'articles_categories.category_id', '=', 'categories.id')
                ->where('title', 'like', '%' .  $request->query('word')  . '%')
                ->with('categories')
                ->paginate(9);
        }

        if (!is_null($request->query('inCategory'))) {
            return Article::select('*')
                ->join('articles_categories', 'articles_categories.article_id', '=', 'articles.id')
                ->join('categories', 'articles_categories.category_id', '=', 'categories.id')
                ->whereIn('category_id', explode(',', $request->query('inCategory')))
                ->with('categories')
                ->paginate(9);
        }

        return Article::select('*')
            ->join('articles_categories', 'articles_categories.article_id', '=', 'articles.id')
            ->join('categories', 'articles_categories.category_id', '=', 'categories.id')
            ->with('categories')
            ->paginate(9);
    }
}
