//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
function uniteUnique(arr)
{
    var sorted = [];
    for (var i = 0; i < arguments.length; i++) {
        sorted.push(arguments[i]);
    }
    var flat = sorted.reduce(function (a, b)
    {
        return a.concat(b);
    });
    return flat.filter(function (item, index, inputArray)
    {
        return inputArray.indexOf(item) == index;
    });
}
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));

