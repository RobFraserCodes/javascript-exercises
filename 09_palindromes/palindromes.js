const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[.,?! ]/g, "");
    let reverseString = newString.split("").reverse().join("");
    // console.log(newString);
    // console.log(reverseString);
    if ( newString == reverseString ) {
        return true;
    } else {
        return false;
    }
};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
