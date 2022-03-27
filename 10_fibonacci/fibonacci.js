const fibonacci = function(targetIndex) {
    targetIndex = Number(targetIndex)
    if (targetIndex < 0){
        return "OOPS"
    }
    let arr = [1, 1]
    for (let i = 2; i <= targetIndex; i++){
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr[targetIndex  - 1]
};

// Do not edit below this line
module.exports = fibonacci;
