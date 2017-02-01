// Create a function that sums two arguments together.
// If only one argument is provided, then return a function
// that  expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5,
// and addTogether(2) should return a function.
// Calling this returned function with
// a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.
function addTogether()
{
    var args = Array.from(arguments);
    var trueOrFalse = args.every(function (item)
    {
        return typeof item == 'number';
    });
    if (trueOrFalse === false) {
        return undefined;
    }
    if (args.length > 1) {
        return args.reduce(function (a, b)
        {
            return (a + b);
        });
    }
    if (args.length == 1) {
        return function sumTwoAnd(num)
        {
            if (typeof num !== 'number') {
                return undefined;
            }
            return num + args[0];
        };
    }
}
console.log(addTogether(2)([3]));