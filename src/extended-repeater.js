const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {

  let separator = '';

  if(options.repeatTimes === undefined){
    options.repeatTimes = 1;
  }

  if (options.separator === undefined){
    separator = '+';
  }else{
    separator = options.separator;
  }

  if(options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = 1;
    if (options.addition === undefined){
      options.addition = '';
    }
  }else{
    if (options.addition === undefined){
      options.addition = '';
    }
  }

  if (options.additionSeparator === undefined){
    options.additionSeparator = '';
  }


  let newStr = '';
  console.log(separator);

  let calc = 0;
  let counter = 0;
  for (let i = 0; i < options.repeatTimes; i++) {
    calc++;

    newStr += str ;
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      newStr += options.addition ;
      if (options.additionRepeatTimes !== 1){
        counter++;
        if(counter !== options.additionRepeatTimes){
          newStr += options.additionSeparator;
        }
      }
    }
    if (calc !== options.repeatTimes) {
      newStr += separator;
    }
  }
  return newStr;
};
  