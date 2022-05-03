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

    <div id="app-react"></div>

    {{-- <h1>Welcome {{ auth()->user()->name }} !!</h1> --}}
    <div class="container pt-3">
        <div class="d-flex justify-content-between mb-3">
            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-filter">
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
            </button>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                New Article
            </button>
        </div>


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <form>
            <label for="exampleFormControlInput1" class="form-label">Search article</label>
            <div class="mb-3 d-flex">
                <input type="email" class="form-control" id="exampleFormControlInput1"
                    placeholder="Search by name or description">
                <button type="type" class="btn btn-secondary btn-sm ml-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Filter by category</label>
                <select class="form-control form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>

        </form>
    </div>

    <div class="container">
        <div class="row">
            @for ($i = 0; $i < 9; $i++)
                <div class="col-md-4 my-2">
                    <div class="card text-center">

                        <div class="card-body">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text text-truncate">With supporting text below as a natural lead-in to additional
                                content.
                            </p>
                            <a href="#" class="btn btn-outline-info">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-mouse-pointer">
                                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                                    <path d="M13 13l6 6"></path>
                                </svg>
                                Visit Article
                            </a>
                        </div>
                        <div class="card-footer d-flex justify-content-between">
                            <a href="#">
                                <svg class="text-danger" xmlns="http://www.w3.org/2000/svg" width="17" height="17"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path
                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                    </path>
                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                    <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                            </a>
                            <div>
                                <div class="text-muted small mt-1">
                                    2 days ago
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            @endfor
        </div>
    </div>

    <div class="container pt-4">
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
@endsection

