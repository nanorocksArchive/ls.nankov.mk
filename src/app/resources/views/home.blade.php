@extends('layouts.app')
@section('title')
    Home
@endsection
@section('content')
    <div class="jumbotron jumbotron-fluid d-sm-block d-md-block d-none d-lg-block">
        <div class="container">
            <h1 class="display-4">Dashboard</h1>
            <p class="lead">
                Manage articles by adding new, filtering them and many more ...
            </p>
        </div>
    </div>
    {{-- <h1>Welcome {{ auth()->user()->name }} !!</h1> --}}
    {{-- {{ React live here ... }} --}}
    <div id="app-dashboard"></div>
@endsection

