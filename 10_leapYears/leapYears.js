const leapYears = function(year) {
    out = false;
    if( year%4 == 0 ) out = true;
    if( year%100 == 0) out = false;
    if( year%400 == 0) out = true;
    return out;
};

// Do not edit below this line
module.exports = leapYears;
