const sumAll = function(a, b) {
    if(checkIllegal(a) || checkIllegal(b)) return 'ERROR';

    let sum=0;
    for(let i=Math.min(a,b); i<=Math.max(a,b); i++) {
        sum += i;
    }

    return sum;
};

function checkIllegal(a) {
    out = false;
    if(a<0) out=true;
    if(a%1 !== 0) out=true;
    if(typeof(a) !== typeof(1)) out=true;
    return out;
}

// Do not edit below this line
module.exports = sumAll;
