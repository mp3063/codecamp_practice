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

    function rot13(str) { // LBH QVQ VG!
        var niz = [];
        str.split("").forEach(function (item) {
            var alt = item.charCodeAt(0) + 13;
            if (item === "!" || item === "?" || item === ".") {
                niz.push(item.charCodeAt(0));
            }
            else if (alt > 90) {
                var decod = (alt - 91) + 65
                niz.push(decod);
            }
            else {
                niz.push(item.charCodeAt(0) + 13);
            }
        });
        var dekodirano = [];
        niz.forEach(function (item) {
            dekodirano.push(String.fromCharCode(item));
        });
        return dekodirano.join("").replace(/-/g, " ");
    }

    // Change the inputs below to test
    console.log(rot13("SERR YBIR?"));

</script>
</body>
</html>
