const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    if (firstNum < 0 || secondNum < 0) {
        return 'ERROR';
    } else if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        return 'ERROR';
    } else if (firstNum > secondNum) {
        for (let i = secondNum; i <= firstNum; i++) {
            sum += i;
        }
    } else if (firstNum < secondNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i;
        }
    } else {
        sum = firstNum + secondNum;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
