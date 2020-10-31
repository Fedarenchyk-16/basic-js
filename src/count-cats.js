const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
    let calc = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === '^^') {
          calc++;
        }
      }
    }
    return calc;
};