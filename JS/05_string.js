const name = "priyanshu";
const age = 21;

// console.log(name +" " + age + " years old");

console.log(`My name is ${name} and I am ${age} years old`);

const newName = new String("sach-in-com");

console.log(newName[0]);
console.log(newName.__proto__);

console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(3));
console.log(newName.indexOf("a"));

const newString = newName.slice(0, 3);
console.log(newString)

const anotherString = newName.slice(-5, 8);
console.log(anotherString)

const myNameOne = "   priyanshu   ";
console.log(myNameOne)
console.log(myNameOne.trim())

const url = "https://priyanshu.com/priyanshu%20gaikwad";
console.log(url.replace("%20", " "));
console.log(url.includes("gaikwad"));

console.log(newName.split("-"));