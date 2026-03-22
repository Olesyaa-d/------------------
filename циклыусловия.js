//1
let n = -5;
if (n > 0) {
    console.log("possitive");
} else if (n < 0) {
    console.log("negative");
} else {
    console.log("zero");
}
//2
let a = 12, b = 7;
if (a>b) {
    console.log(b);
} else {
    console.log(a);
}
//3
let v = 15;
if (v % 3 === 0) {
    console.log("yes");
} else {
    console.log("no");
}
//4
let summ = 0;
let i = 1;
for (let i = 1; i <= 7; i++) {
    summ += i;
}
console.log(summ)
//5
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//6
let summa = 0;
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        summa += 1;
    }
}
console.log(summa)
//7
count = 0
for (ch of "banana") {
    if (ch === "a") {
        count += 1
    }
}
console.log(count)
//8
const str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed); 
//9
let num = 4
for (let i = 1; i < 11; i++) {
    console.log(num*i);
}
//10
let s = ''
for (let i = 1; i < 5; i++) {
    console.log(s+='*');
}
//11
acc = 0
for (i = 1; i < 30; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        acc += i;
    }
}
console.log(acc);
//12


