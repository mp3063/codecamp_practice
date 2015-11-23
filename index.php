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

    function bouncer(arr) {
        var niz = [];
        for (var i = 0; i < arr.length; i++) {
            if (!!arr[i]) {
                niz.push(arr[i]);
            }
        }
        return niz;
    }

    bouncer([7, "ate", "", false, 9]);

</script>
</body>
</html>
