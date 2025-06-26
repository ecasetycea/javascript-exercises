const removeFromArray = function(array, a='', b='', c='', d='') {
    for(let i=0; i<array.length; i++) {
        switch(array[i]) {
            case a:
            case b:
            case c:
            case d:
                array.splice(i--,1);
                i--;
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
