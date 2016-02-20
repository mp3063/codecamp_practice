function pair(str) {
    var niz = [];
    var splString = str.split("");

    function addPair(letter) {
        switch (letter) {
            case "A":
                niz.push(["A", "T"]);
                break;
            case "T":
                niz.push(["T", "A"]);
                break;
            case "G":
                niz.push(["G", "C"]);
                break;
            case "C":
                niz.push(["C", "G"]);
                break;
        }
    }

    splString.filter(addPair);
    return niz;
}

console.log(pair("ATCGA"));

