<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Article;
class Category extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'user_id'
    ];

    /**
     *
     */
    public function articles()
    {
        return $this->belongsToMany(Article::class, 'articles_categories');
    }

    /**
     *
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
