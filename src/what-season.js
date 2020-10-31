const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(date);
  if (date !== undefined){
    console.log(typeof date);
    if (date instanceof Date && !isNaN(date) && Array.isArray(date) === false){
      console.log('прошло');
     // if (date instanceof Date && !isNaN(date)) {
        let value = date.getMonth();
        console.log(value + "-vot");
        if (((value >= 0) && (value <= 1)) || (value == 11)) {
          return 'winter';
        }
        if ((value >= 2) && (value <= 4)) {
          return 'spring';
        }
        if ((value >= 5) && (value <= 7)) {
          return 'summer';
        }
        if ((value >= 8) && (value <= 10)) {
          return 'autumn';
        }
     /* } else {
        return 'Error';
      }*/
    } else {
      console.log('ерррор');
      return 'Error';
  }
  }else{
    return 'Unable to determine the time of year!';
  }
};
