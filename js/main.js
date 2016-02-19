function myReplace(str, before, after) {
    var bef = before.split("");
    var af = after.split("");
    var replace = new RegExp(before, "i");
    if (bef[0].toLowerCase() === bef[0]) {
        return str.replace(replace, after);
    }
    else {
        var firstLetter = af[0].toUpperCase();
        af.splice(0, 1, firstLetter);
        var res = af.join("");
        return str.replace(replace, res);
    }
}

console.log(
    myReplace("Let us get back to more Coding", "Coding", "algorithms"));
