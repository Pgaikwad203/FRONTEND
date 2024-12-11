const score = 33;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 230.2222;
console.log(otherNumber.toPrecision(3));

const hunderdS = 1000000
console.log(hunderdS.toLocaleString("en-IN"));

// ====================== Math =========================

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(3.6));
console.log(Math.ceil(3.2));
console.log(Math.floor(3.8));
console.log(Math.sqrt(16));
console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.pow(2, 3));
console.log(Math.random());

console.log((math.random() * 10) + 1);
console.log(Math.floor(math.random() * 10) + 1);

min = 10;
max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));