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
    
    function where(collection, source) {
        var sourceKeys = Object.keys(source);
        
        return collection.filter(function (colObject) {
            return sourceKeys.every(function (sourceKey) {
                return colObject.hasOwnProperty(
                        sourceKey) && colObject[sourceKey] === source[sourceKey];
            });
        });
    }
    
    console.log(where([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}],
        {"a": 1, "c": 2}));


</script>
</body>
</html>
