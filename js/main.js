// Flatten a nested array. You must account for varying levels of nesting.
// Remember to use Read-Search-Ask if you get stuck.
// Try to pair program. Write your own code.
function steamrollArray(arr)
{
    return arr.reduce(function (a, b)
    {
        if (Array.isArray(b)) {
            return a.concat(steamrollArray(b));
        }
        return a.concat(b);
    }, []);
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));