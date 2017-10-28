// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var binary = N.toString(2), i, gap = 0, binaryLength = binary.length, theGap = 0;
    //console.log(binary);
    for(i = 0; i <= binaryLength; i++) {
        if(binary[i] == 0) {
            //console.log('Found 0');
             ++gap
        }
        else {
            if(gap > theGap){
                theGap = gap;
            }
            gap = 0;
        }
    }
    return theGap;
}
