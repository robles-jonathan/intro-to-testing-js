// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    return 'Hello, ' + input + '!';
}

function isFive(input){
    return input == 5;
}

function isEven(input){
    return parseInt(input) %2 === 0;
}

console.log("isEven(2): " + isEven(2));
console.log("isEven(-4): " + isEven(-4));
console.log("isEven(3): " + isEven(3));
console.log("isEven(\"banana\"): " + isEven("banana"));
console.log("isEven(\"8\"): " + isEven("8"));
console.log("isEven(Infinity): " + isEven(Infinity));
console.log("isEven(true): " + isEven(true));
console.log("isEven(false): " + isEven(false));
console.log("isEven(): " + isEven());

function isVowel(input){
    return  input === "a" ||
            input === "A" ||
            input === "e" ||
            input === "E" ||
            input === "i" ||
            input === "I" ||
            input === "o" ||
            input === "O" ||
            input === "u" ||
            input === "U";
}
console.log("isVowel(): " + isVowel("A"))


function add(x,y){
    return parseInt(x)+parseInt(y);
}

console.log(parseInt("5"))
console.log(add("5",6))
console.log(add("banana", "split"))