const palindromes = function (str) {
    const LETTERS = "abcdefghijklmnopqrstuvwxyz"
    indivLetters = str.toLowerCase().split("")
    let alphaStr = indivLetters.filter(letter => LETTERS.includes(letter)).join("")
    for (let i = 0; i < Math.floor(alphaStr.length / 2); i++){
        if (alphaStr[i] !== alphaStr[alphaStr.length - 1 - i]){
            return false
        }
        return true
    }
};

// Do not edit below this line
module.exports = palindromes;
