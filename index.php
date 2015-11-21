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

    function end(str, target) {
        var sub = str.substr((str.length - target.length), target.length);
        if (sub == target) {
            return true;
        }
        else {
            return false;
        }
    }

    end("He has to give me a new name", "name");

</script>
</body>
</html>
