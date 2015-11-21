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

    function truncate(str, num) {
        if (str.length > num) {
            var cut = str.slice(0, num);
            if (cut.length <= 3) {
                return cut + "...";
            }
            else {
                return cut.slice(0, (cut.length - 3)) + "...";
            }
        }
        return str;
    }

    truncate("Absolutely Longer", 2);

</script>
</body>
</html>
