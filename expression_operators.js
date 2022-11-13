// javascript operators
console.log(`operator in javascript`)

// Arithmatic oprators
let a = 2;
let b = 4;

console.log(`a + b =`, a+b)
console.log(`a - b =`, a-b)
console.log(`a / b =`, a/b)
console.log(`a * b =`, a*b)
console.log(`a ** b =`, a**b)
console.log(`a % b =`, a%b)
console.log(`a++ =`, a++)
console.log(`a =`, a)
console.log(`a % b =`, b--)

// assignment operator
let c = 10;
c += 3; // same as c = c + 3
console.log(c)
c -= 5; //same as c = c - 5
console.log(c)
c *= 5; //same as c = c * 5
console.log(c)
c /= 5; //same as c = c / 5
console.log(c)
c **= 5; //same as c = c ** 5
console.log(c)
c %= 5; //same as c = c % 5
console.log(c)

// comparison operator
let d = 6;
let e = 5;


console.log(d==e) //false
console.log(d!=e) //true
console.log(d!==e) //true
console.log(d===e) //false //check value and type 
console.log(d>e) //true //greter than
console.log(d<e) //false //less than
console.log(d>=e) //true
console.log(d<=e) //false

// && (logical and) operator
console.log(true && true) //true
console.log(false && true) //false
console.log(true && false) //false
console.log(false && false) //false

// || (logical or) operator
console.log(true || true) //true
console.log(false || true) //true
console.log(true || false) //true
console.log(false || false) //false

// ! (logical not) operator
console.log(!true) //false
console.log(!false) //true