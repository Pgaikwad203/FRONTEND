let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN // type of number
// true => 1; false => 0

let isLoggedIn = 1 ;

let booleanloggedIn = Boolean(isLoggedIn);
 console.log(booleanloggedIn)

 // 1 => true // 0 => false 
 // "" => false
 // priyanshu => true

 let someNumber = 33;
 let someString = String(someNumber);
 console.log(someString)    
 console.log(typeof someString)


 //  ******************* Operations *******************

 let value1 = 10;
 let negValue = -value1;
 console.log(negValue)

 console.log(5 + 5);
 console.log(5 - 5);
 console.log(5 * 5);
 console.log(5 / 5);
 console.log(5 % 5);
 console.log(5 ** 2);
 console.log(5 ** 3);

 let str1 = "hello";
 let str2 = " world";

 let str3 = str1 + str2;
 console.log(str3)

 console.log(5 + "5");
 console.log("5" + 5);
 console.log("5" + 5 + 5);
 console.log(5 + 5 + "5");

 console.log(+true)
console.log(+"") 

let num1 , num2, num3
num1 = num2 = num3 = 10 + 10 ;

let gameCounter = 100;
gameCounter++ ;
console.log(gameCounter) ;