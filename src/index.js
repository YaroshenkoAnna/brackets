module.exports = function check(str, bracketsConfig) {
  let bracketsObj = {};

  bracketsConfig.forEach((elem) => {
    bracketsObj[elem[0]] = elem[1];
  })
  let bracketsArr = str.split("");

  function checkIt(){ debugger
    for (let i = 0; i < bracketsArr.length; i++) {
        if (!bracketsObj.hasOwnProperty([bracketsArr[i]])) {
          
           if (bracketsObj[bracketsArr[i-1]]===bracketsArr[i]) {
             bracketsArr.splice(i-1, 2);
        
             checkIt();
           } else {
             return false
             break;
           } 
        }
    }
    return true;
  }

 return checkIt();

}


