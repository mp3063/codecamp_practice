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

    var reference = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var translate = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX',
                     'V', 'IV', 'I'];

    function convert(num) {
        var res = "";

        for (var i = 0; i < reference.length; i++) {
            if (num >= reference[i]) {
                res += translate[i];
                num -= reference[i];
                i--;

            }
        }
        return res;
    }

    console.log(convert(123));

</script>
</body>
</html>
