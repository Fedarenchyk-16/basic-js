const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  let z = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next'){
      if (i !== arr.length-1){
        i = i + 2;
      }else{
        continue;
      }
    }else if (arr[i] === '--discard-prev'){
      if (i !== 0){
        newArr[z-1] = arr [i+1];
        i = i + 1;
      }else{
        continue;
      }
    }else if (arr[i] === '--double-next'){
      if (i !== arr.length-1){
        newArr[z] = arr[i+1];
        newArr[z+1] = arr[i+1];
        z = z + 2;
        i = i + 1;
      }else{
        continue;
      }
    }else if (arr[i] === '--double-prev'){
      if (i !== 0) {
        newArr[z] = arr[i - 1];
        i = i;
        z = z + 1;
      }else{
        continue;
      }
    }else {
      newArr[z++] = arr[i];
    }
  }
  return newArr;

};
