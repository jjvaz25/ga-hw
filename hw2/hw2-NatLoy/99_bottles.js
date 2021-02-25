var num = 100;
function versus(num) {
    if(num === 0 ){
        return;
    }
    console.log(`${num} ${(num === 1) ? "bottle" : "bottles"} of beer on the wall,\n${num} ${(num === 1) ? "bottle" : "bottles"} of beer!\nTake one down,\nPass it around,\n${num-1} ${(num-1 === 1) ? "bottle" : "bottles"} of beer on the wall!\n`)
    versus(num-1);    
};
versus(num);
