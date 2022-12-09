function getPasswordChecker(password) {
    let correctPassword = password;
  
    return function(password) {return (correctPassword === password)};
  }
  
const user1 = new getPasswordChecker("123fga");
  
console.log(user1('sdfhgbd'));
console.log(user1("123fga"));