//1
function sayHello() {
    console.log("Hello, JS!");
}
sayHello();
//2
function greet(name) {
    console.log(`Hello, ${name}`);
}
greet("JS");
//3
function greetCheck(name) {
    if (name) {
        return `Hello, ${name}`;
    }
    return "Hello, stranger";
}
console.log(greetCheck());
console.log(greetCheck("Olesya"));
//4
function square(x) {
    return x * x;
}
console.log(square(5));
//5
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));
//6
function min(a, b) {
    return a < b ? a : b;
}
console.log(min(15, 3));
//7
const double = (x) => x * 2;
console.log(double(6));
//8
function apply(fn, x) {
    return fn(x);
}
console.log(apply(n => n + 1, 5));
//9
function filterByLength(words, minLen) {
    return words.filter(word => word.length > minLen);
}
console.log(filterByLength(["hi", "hello", "world"], 3));
//10
function toUpperArray(arr) {
    return arr.map(str => str.toUpperCase());
}
console.log(toUpperArray(["hi", "word", "hello"]));