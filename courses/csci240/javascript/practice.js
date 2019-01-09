/**
 * Created by DennisMarchuk on 2/2/2018.
 */

console.log("test");

console.log(typeof x);     // prints the type: “undefined”

console.log(parseInt("1234blue"));

var age = 20;
console.log(age.toString());

var x = null;
console.log(typeof x);   // prints “object”

var age = "18";
age = +age; // age now has type Number with value 1
console.log(age);

var num1 = 6; // 0000 0110 (6)
var num2 = num1 << 3; // 0011 0000 (48)
console.log(num2, num1)


var done = false;
if (~done) {
    console.log("testing");
    done = true;
}

var a = 3;
var b = 5;
var message = "3 + 5 = " + a + b; // “3 + 5 = 35”
console.log(message);