const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let result = '';
  //return typeof arr;
  if ((arr !== null) && (typeof arr ) === 'object'){
    for (let i = 0; i < arr.length; i++) {
      if ((typeof arr[i]) === 'string') {
        let a = arr[i].trim();
        result += a[0].toUpperCase();
      }
    }
    return result.split('').sort().join('');
  }else{
    return false;
  }
};
