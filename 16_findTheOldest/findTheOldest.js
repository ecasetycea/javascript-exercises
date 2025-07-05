const findTheOldest = function(people) {
    let indexOfOldest;
    let oldestAge = 0;
    
    for(person of people) {
        let age;
        if("yearOfDeath" in person) {
            age = getAge(person.yearOfBirth, person.yearOfDeath);
        } else {
            age = getAge(person.yearOfBirth, 2025);
        }
        if(age > oldestAge) {
            oldestAge = age;
            indexOfOldest = people.indexOf(person);
        }

    }

    return people[indexOfOldest];
};

function getAge(birth, death){
    return death-birth;
}

// Do not edit below this line
module.exports = findTheOldest;
