const fibonacci = function(n) {
    if (n<0) {
        return "OOPS";
    }
    let fibonacciSeq = [0,1];

    for(let i = 2; i <= n; i++){
        fibonacciSeq[i] = fibonacciSeq[i-1] + fibonacciSeq[i-2];
    }

    return fibonacciSeq[n];
};

// Do not edit below this line
module.exports = fibonacci;
