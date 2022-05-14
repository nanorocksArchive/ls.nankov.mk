@extends('layouts.app')
@section('title')
    Analytics
@endsection
@section('content')
    <div class="jumbotron jumbotron-fluid d-sm-block d-md-block d-none d-lg-block">
        <div class="container">
            <h1 class="display-4">Analytics</h1>
            <p class="lead">
                Follow the added articles per category
            </p>
        </div>
    </div>
    <div class="container pt-3 pb-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
        </div>
    </div>
    <input type="hidden" value="{{ json_encode($names) }}" id="chart-names" />
    <input type="hidden" value="{{ json_encode($counts) }}" id="chart-counts" />
    <input type="hidden" value="{{ json_encode($colors) }}" id="chart-colors" />
@endsection
@section('js')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"
        integrity="sha512-QSkVNOCYLtj73J4hbmVoOV6KVZuMluZlioC+trLpewV8qMjsWqlIQvkn1KGX2StWvPMdWGBqim1xlC8krl1EKQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script>
        var ctx = document.getElementById('myChart');

        const names = JSON.parse(document.getElementById('chart-names').value)
        const counts = JSON.parse(document.getElementById('chart-counts').value)
        const colors = JSON.parse(document.getElementById('chart-colors').value)

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: names,
                datasets: [{
                    label: '# of Votes',
                    data: counts,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>
@endsection
