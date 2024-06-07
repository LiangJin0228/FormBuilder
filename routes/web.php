<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Test;

Route::get('/', function () {
    return view('index', ['laravel_version' => app()->version(), 'php_version' => phpversion()]);
});

Route::controller(Test::class)->group(function () {
    Route::get('fakeData', 'fakeData');
    Route::post('saveData', 'saveData');
});



Route::get('{any?}', function () {
    return view('index', ['laravel_version' => app()->version(), 'php_version' => phpversion()]);
})->where('any', '.*');
