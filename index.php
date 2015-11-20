<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!--    <script src="js/vue.min.js"></script>-->
    <link href="css/main.css" rel="stylesheet">
    <title>Proba VUE.JS</title>
</head>
<body>
<!--<div id="sin">-->
<!--    <button type="submit" @click="increment">Increment counter: {{ counter }}</button>-->
<!--</div>-->

<!--<script src="js/main.js"></script>-->
<script>

    function findLongestWord(str) {
        var niz = str.split(' ');
        var block = niz.reduce(function (a, b) {
            return a.length > b.length ? a : b;
        });
        return block.length;
    }
    findLongestWord("The quick brown fox jumped over the lazy dog");

</script>
</body>
</html>
