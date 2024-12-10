const accountId=12345
let accountEmail= "akshat@jian.com"
var accountPassword= "123456"
accountCity= "Jaipur"
let accountState;
// accountId=2 Not allowed

accountEmail= "jain@jain.com"
accountPassword="158484"
accountCity = "delhi"

console.log(accountId);
/*
prefer not to use var 
because of issue in the block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])