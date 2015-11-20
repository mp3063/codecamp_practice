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
    <button type="submit" @click="increment">Increment counter: {{ counter }}</button>
</div>

<script src="js/main.js"></script>
<script>

    function checkPalindrom(str) {
        var punct = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "").split(
            ' ').join('').toLowerCase();
        var string = punct.split('').reverse().join('').replace(
            /[.,-\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        if (punct == string) {
            return console.log(true);
        }
        else {
            return console.log(false);
        }
    }

    checkPalindrom("My age is 0, 0 si ega ym.");

</script>
</body>
</html>
