function fearNotLetter(str) {
    var splString = str.split("");
    var range = [];
    splString.forEach(function (letter) {
        range.push(letter.charCodeAt(0));
    });
    var start = range[0];
    var last = range[range.length - 1];
    var ran = [];
    while (start <= last) {
        ran.push(start++);
    }
    function missing(a, b) {
        if (b < range.length - 1) {
            var c = range[b + 1] - a;
            if (c !== 1) {
                return a;
            }
        }
    }

    var miss = range.filter(missing);
    if (miss.length > 0) {
        return String.fromCharCode(miss[0] + 1);
    }
    else {
        return undefined;
    }
}

console.log(fearNotLetter("abce"));

