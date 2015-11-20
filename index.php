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

    function titleCase(str) {
        var niz = str.toLowerCase().split(' ');
        var sol = [];
        for (var i = 0; i < niz.length; i++) {
            sol.push(niz[i].charAt(0).toUpperCase() + niz[i].slice(1));
        }
        console.log(sol.join(' '));
    }

    titleCase("sHoRt AnD sToUt");

</script>
</body>
</html>
