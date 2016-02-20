function translate(str) {
    var consonant = ["a", "e", "i", "o", "u"];
    var splString = str.split("");
    var counter = 0;
    var consArray = [];
    splString.forEach(function (letter) {
        counter++;
        for (var i = 0; i < consonant.length; i++) {
            var suglas = consonant[i];
            if (letter == suglas) {
                consArray.push(counter - 1);
                break;
            }
        }
    });
    var firstIndex = consArray[0];
    if (firstIndex > 0) {
        var transfer = splString.splice(0, firstIndex);
        transfer.forEach(function (item) {
            splString.push(item);
        });
        return splString.join("") + "ay";
    }
    else {
        return splString.join("") + "way";
    }
}

console.log(translate("glove"));
