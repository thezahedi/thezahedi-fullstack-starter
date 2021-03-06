<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <title>{{ env("APP_NAME", "My Site <- You can set this by add APP_NAME to .env file") }}</title>
</head>
<body>
<div id="app">
</div>

<script src="{{ mix('js/main.js') }}"></script>
</body>
</html>
