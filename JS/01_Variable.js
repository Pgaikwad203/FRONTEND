const accountId = 1234;
let accountEmail = "mW8m9@example.com";
var accountPassword = "1234";
accountCity = "Nagpur";
let accountState;

//acccountId = 2 // not allowed

accountEmail = "mW203@example.com";
accountPassword = "12345789";
accountCity = "Raipur";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);