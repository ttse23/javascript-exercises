const reverseString = function(string) {
    let chars = string.split('');
    let stringReversed = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringReversed += chars[i];
    }
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
