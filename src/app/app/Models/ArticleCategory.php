<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class ArticleCategory extends Model
{
    use HasFactory;

    protected $table = 'articles_categories';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'article_id',
        'category_id',
    ];

    /**
     *
     */
    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    /**
     *
     */
    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
