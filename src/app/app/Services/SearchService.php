<?php

namespace App\Services;

use App\Models\Article;

class SearchService
{
    public static function searchArticlesByWord(string $word, int $id)
    {
        return Article::select('*')->join('articles_categories', 'articles_categories.article_id', '=', 'articles.id')
            ->join('categories', 'articles_categories.category_id', '=', 'categories.id')
            ->where('title', 'like', '%' .  $word  . '%')
            ->where('articles.user_id', '=', $id)
            ->with('categories')
            ->paginate(9);
    }

    public static function searchArticlesByCategories(array $categories, int $id )
    {
        return
            Article::select('*')
            ->join('articles_categories', 'articles_categories.article_id', '=', 'articles.id')
            ->join('categories', 'articles_categories.category_id', '=', 'categories.id')
            ->whereIn('category_id', $categories)
            ->where('articles.user_id', '=', $id)
            ->with('categories')
            ->paginate(9);
    }

    public static function searchClear(int $id)
    {
        return Article::select('*')
            ->join('articles_categories', 'articles_categories.article_id', '=', 'articles.id')
            ->join('categories', 'articles_categories.category_id', '=', 'categories.id')
            ->where('articles.user_id', '=', $id)
            ->with('categories')
            ->paginate(9);
    }
}
