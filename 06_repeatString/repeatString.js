const repeatString = function(string, repeats) {
    if(repeats<0) return 'ERROR';
    out = '';
    for(let i=0; i<repeats; i++) {
        out += string;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
