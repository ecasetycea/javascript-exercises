const palindromes = function (string) {
    string = string.toLowerCase();
    let array = string.split('');
    removeItemAll(array, '!');
    removeItemAll(array, ',');
    removeItemAll(array, '.');
    removeItemAll(array, ' ');

    for(let i=0; i<array.length; i++) {
        if(array.at(i) !== array.at(-1-i)) return false;
    }
    return true;
};

function removeItemAll(array, value){
    let i = 0;
    while(i < array.length) {
        if(array[i] === value) {
            array.splice(i, 1);
        } else {
            i++;
        }
    }
    return array;
}

// Do not edit below this line
module.exports = palindromes;
