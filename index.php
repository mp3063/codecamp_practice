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

    function largestOfFour(arr) {
        var niz = [];
        for (var i = 0; i < arr.length; i++) {
            var lon = arr[i].reduce(function (a, b) {
                return b < a ? a : b;
            });
            niz.push(lon);
        }
        return niz;
    }

    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39],
        [1000, 1001, 857, 1]]);

</script>
</body>
</html>
