<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="js/vue.min.js"></script>
    <link href="css/main.css" rel="stylesheet">
    <title>Proba VUE.JS</title>
</head>
<body>
<div id="sin">
    <small v-show="!poruka"><em>You must enter a message</em></small>
    <br>
    <textarea v-model="poruka" cols="30" rows="10"></textarea><br>
    <button v-show="poruka" type="submit">Send message</button>
</div>

<script src="js/main.js"></script>
</body>
</html>
