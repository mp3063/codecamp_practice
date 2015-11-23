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

    function where(arr, num) {
        var niz = arr.sort(function (a, b) {
            return a - b;
        });
        for (var i = 0; i < niz.length; i++) {
            if (num <= niz[i]) {
                return i;
            }
        }
        return niz.length;
    }

    where([5, 3, 20, 3], 5);

</script>
</body>
</html>
