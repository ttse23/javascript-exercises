const findTheOldest = function(arr) {
    arr.forEach(person => {
        if (person.yearOfDeath === undefined){
            person.yearOfDeath = new Date().getFullYear()
        }
    })
    let oldest = arr.reduce((a, b) => {
        let ageOfA = a.yearOfDeath - a.yearOfBirth
        let ageOfB = b.yearOfDeath - b.yearOfBirth
        if (ageOfA > ageOfB){
            return a
        } else{
            return b
        }
    })
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
