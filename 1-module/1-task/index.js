/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

function factorial(n) {
    if (n<0 || (n ^ 0) !== n) {
        console.log("число не является натуральным");
        return;
    }
    
    
    let total=1;
    while (n>1) {
        total *=n;
        n--;
    }
    return total;
}
