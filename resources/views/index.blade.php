<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FormBuilder</title>
    <script>
        const laravel_version = {!! json_encode($laravel_version) !!};
        const php_version = {!! json_encode($php_version) !!};
    </script>
    <style scoped>
        .loading-overlay {
            top: 0 !important;
            left: 0 !important;
            position: fixed !important;
            width: 100vw !important;
            height: 100vh !important;
            z-index: 999999 !important;
            background-color: #1d2630 !important;
        }
    </style>
</head>

<body>
    <div id="app"></div>
    @vite('resources/js/main.js')
</body>

</html>