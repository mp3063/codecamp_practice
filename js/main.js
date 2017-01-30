// Given a positive integer num,
// return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1.
// Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
function sumFibs(num)
{
    var fibon = [1, 1];
    for (var i = 0; i <= num; i++) {
        if (fibon[fibon.length - 1] <= num) {
            fibon.push(fibon[i] + fibon[fibon.length - 1]);
        }
    }
    var arr = [1];
    for (var k = 1; k <= fibon.length; k++) {
        if (fibon[k] % 2 == 1 && fibon[k] <= num) {
            arr.push(fibon[k]);
        }
    }
    var sum = 0;
    for (var j = 0; j < arr.length; j++) {
        sum += arr[j];
    }
    return sum;
}
console.log(sumFibs(4));