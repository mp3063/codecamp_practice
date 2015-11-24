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

    function sumAll(arr) {
        if (arr.length > 1) {
            var sort = arr.sort(function (a, b) {
                return a - b;
            });
            var min = sort[0];
            var max = sort[1];
            var empty = [];
            var res = 0;
            for (var i = min; i <= max; i++) {
                empty.push(i);
            }
            for (var k = 0; k < empty.length; k++) {
                res += empty[k];
            }
            return res;
        }
        return 1;
    }

    sumAll([1, 4]);

</script>
</body>
</html>
