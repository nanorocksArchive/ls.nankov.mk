<?php

namespace App\Http\Controllers\Ajax;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\Category;
use App\Services\SearchService;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class ArticlesController extends Controller
{

    public function index(Request $request)
    {
        $user = Auth::user();

        if (!is_null($request->query('word'))) {
            return SearchService::searchArticlesByWord($request->query('word'), $user->id);
        }

        if (!is_null($request->query('inCategory'))) {
            return SearchService::searchArticlesByCategories(explode(',', $request->query('inCategory')), $user->id);
        }

        return SearchService::searchClear($user->id);
    }


    public function store(Request $request)
    {

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json'
        ])->post(env('SPIDER'), [
            "url" => $request->url
        ]);

        $dataSet = $response->json();
        $user = Auth::user();

        $article = new Article();
        $article->title = $dataSet['title'] ?? $request->url;
        $article->description = $dataSet['description'] ?? $request->url;
        $article->url = $request->url;
        $article->user_id = $user->id;
        $article->save();

        $category = Category::firstOrCreate(['name' => $request->category, 'user_id' => $user->id]);

        $ac = new ArticleCategory(['category_id' => $category->id, 'article_id' => $article->id]);
        $ac->save();

        return $article;
    }

    public function trashed()
    {
        return Article::onlyTrashed()->with('categories')->get();
    }

    public function rollback(int $id)
    {
        return Article::onlyTrashed()->where('id', '=', $id)->restore();
    }
}
