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

    function slasher(arr, howMany) {
        if (arr.length < howMany) {
            return [];
        }
        else if (howMany === 0) {
            return arr;
        }
        else {
            return arr.splice((arr.length - 1), howMany);
        }


    }

    slasher([1, 2, 3], 2);

</script>
</body>
</html>
