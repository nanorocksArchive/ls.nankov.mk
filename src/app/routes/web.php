<?php

use App\Http\Controllers\Ajax\ArticlesController;
use App\Http\Controllers\Ajax\CategoryController;
use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::controller(AppController::class)->middleware(['auth'])->group(function () {
    Route::get('/', 'home');
    Route::get('/home', 'home')->name('home');
    Route::get('/history', 'history')->name('history');
    Route::get('/analytics', 'analytics')->name('analytics');
    Route::get('/notifications', 'notifications')->name('notifications');
});


Route::get('/articles', [ArticlesController::class, 'index'])->middleware(['auth'])->name('ajax.articles');
Route::get('/articles/trashed', [ArticlesController::class, 'trashed'])->middleware(['auth'])->name('ajax.articles.trashed');
Route::put('/articles/{id}/rollback', [ArticlesController::class, 'rollback'])->middleware(['auth'])->name('ajax.articles.trashed');
Route::get('/categories', [CategoryController::class, 'index'])->middleware(['auth'])->name('ajax.categories');
Route::post('/articles/store', [ArticlesController::class, 'store'])->name('ajax.articles.store');
Route::put('/articles/{id}/update', [CategoryController::class, 'moveToHistory'])->middleware(['auth'])->name('ajax.articles.store');

