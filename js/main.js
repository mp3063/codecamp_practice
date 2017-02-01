// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3
// that is evenly divisible by all numbers between 1 and 3.
function smallestCommons(arr)
{
    function sortNumber(a, b)
    {
        return a - b;
    }
    
    var sorted = arr.sort(sortNumber);
    var from = sorted[0];
    var to = sorted[1];
    var range = [];
    for (var i = from; i <= to; i++) {
        range.push(i);
    }
    for (var k = 1; k < range.length; k++) {
        from = (from * range[k]) / evenlyDivisible(from, range[k]);
    }
    return from;
    function evenlyDivisible(fromNumber, modulo)
    {
        if (modulo === 0) {
            return fromNumber;
        } else {
            return evenlyDivisible(modulo, fromNumber % modulo);
        }
    }
}
console.log(smallestCommons([5, 10]));