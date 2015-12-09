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

    function diff(arr1, arr2) {
        var res = [];

        arr1.forEach(function (item) {
            if (!_existItem(item, arr2)) {
                res.push(item);
            }
        });

        arr2.forEach(function (item) {
            if (!_existItem(item, arr1)) {
                res.push(item);
            }
        });

        return res;
    }

    function _existItem(value, arr) {
        if (arr.indexOf(value) >= 0) {
            return true;
        }

        return false;
    }

    diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

</script>
</body>
</html>
