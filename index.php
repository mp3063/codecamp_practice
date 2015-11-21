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

    function repeat(str, num) {
        var niz = [];
        if (num < 0) {
            return "";
        }
        else {
            for (var i = 0; i < num; i++) {
                niz.push(str);
            }
            return niz.join('');
        }
    }

    repeat("abc", 3);

</script>
</body>
</html>
