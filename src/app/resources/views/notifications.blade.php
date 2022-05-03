@extends('layouts.app')
@section('title')
    Notifications
@endsection
@section('content')
<div class="container pt-4">
    <div class="row text-right">
        <div class="col">
            <h5><a href="#" class="text-info">Clear notifications</a></h5>
        </div>
    </div>
</div>
    <div class="container">
        <div class="row">
            @for ($i = 0; $i < 9; $i++)
                <div class="col-md-12 my-2">
                    <div class="card p-2">
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 text-info pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-bell">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                </svg>
                            </div>
                            <div class="flex-grow-1 ms-3 pl-3 small">
                                <h4>Lorem ipsum dolor si</h4>
                                This is some content from a media component. You can replace this with any content and
                                adjust it
                                as needed.
                            </div>
                        </div>
                    </div>
                </div>
            @endfor
        </div>
    </div>
@endsection
