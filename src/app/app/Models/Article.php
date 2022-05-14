<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Category;

class Article extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'url',
        'title',
        'description',
        'deleted_at'
    ];

    /**
     *
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'articles_categories');
    }

    /**
     *
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
