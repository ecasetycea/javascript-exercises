const fibonacci = function(number) {
    if(typeof number === "string") number = Number(number);
    if(number < 0) return "OOPS";
    
    let a = 0;
    let b = 1;

    for(let i=0; i<number; i++) {
        let tmp = a+b;
        a = b;
        b = tmp;
    }

    return a;
};

// Do not edit below this line
module.exports = fibonacci;
