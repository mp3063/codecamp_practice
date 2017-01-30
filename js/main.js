// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
function spinalCase(str)
{
    var regex = /(?=[A-Z\s_"])/;
    var regex1 = /(?=[\s_"])/;
    var splitted = str.split(regex);
    var clean = [];
    for (var i = 0; i < splitted.length; i++) {
        var cle = splitted[i].trim();
        if (regex1.test(cle) === false) {
            if ('' !== cle) {
                clean.push(cle);
            }
        }
    }
    return clean.join('-').toLowerCase();
}
console.log(spinalCase("Teletubbies say Eh-oh"));