<?php

namespace App\Http\Controllers\Ajax;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class ArticlesController extends Controller
{

    public function index(Request $request)
    {
        $user = Auth::user();

        if (!is_null($request->query('word'))) {
            return Article::select('*')->join('articles_categories', 'articles_categories.article_id', '=', 'articles.id')
                ->join('categories', 'articles_categories.category_id', '=', 'categories.id')
                ->where('title', 'like', '%' .  $request->query('word')  . '%')
                ->where('articles.user_id', '=', $user->id)
                ->with('categories')
                ->paginate(9);
        }

        if (!is_null($request->query('inCategory'))) {
            return Article::select('*')
                ->join('articles_categories', 'articles_categories.article_id', '=', 'articles.id')
                ->join('categories', 'articles_categories.category_id', '=', 'categories.id')
                ->whereIn('category_id', explode(',', $request->query('inCategory')))
                ->where('articles.user_id', '=', $user->id)
                ->with('categories')
                ->paginate(9);
        }

        return Article::select('*')
            ->join('articles_categories', 'articles_categories.article_id', '=', 'articles.id')
            ->join('categories', 'articles_categories.category_id', '=', 'categories.id')
            ->where('articles.user_id', '=', $user->id)
            ->with('categories')
            ->paginate(9);
    }


    public function store(Request $request)
    {
        return ['aaaa'];
    }

    public function trashed(Request $request)
    {
        return Article::onlyTrashed()->with('categories')->get();
    }

    public function rollback(int $id)
    {
        return Article::onlyTrashed()->where('id', '=', $id)->restore();
    }
}
