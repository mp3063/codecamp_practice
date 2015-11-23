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

    function mutation(arr) {
        var niz1 = arr[0].toLowerCase().split("");
        var niz2 = arr[1].toLowerCase().split("");
        var booltrue = [];
        var boolfalse = [];
        for (var i = 0; i < niz2.length; i++) {
            var slovo = niz2[i];
            for (var l = 0; l < niz1.length; l++) {
                if (slovo == niz1[l]) {
                    booltrue.push(true);
                }
                else {
                    boolfalse.push(false);
                }
            }
        }
        if (booltrue.length >= niz2.length) {
            return true;
        }
        else {
            return false;
        }
    }

    mutation(["hello", "hey"]);

</script>
</body>
</html>
