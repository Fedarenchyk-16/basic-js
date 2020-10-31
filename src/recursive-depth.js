const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    var self = this;
    console.log(arr);
    let calc = 1 ;
    let Times = 0;
   // let depth = 0;
    //let prevDepth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])){
        Times++;
        console.log(Times);
        console.log(i);
        calc += self.calculateDepth(arr[i]);
        console.log(calc);
      }
    }
    return calc;
  }
};