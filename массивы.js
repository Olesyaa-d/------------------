//1
let arr = [1, 2];
arr.push(3);
console.log(arr);
//2
let ar = ["a", "b", "c"];
last = ar.pop();
console.log(last);
console.log(ar);
//3
let bb = [10, 20, 30, 40];
console.log(bb.includes(100));
//4
let cc = [5, 10, 15, 20, 25];
let part = cc.slice(1, 4);
console.log(part);
//5
let dd = [1, 2, 3, 4];
dd.splice(1, 2, "X", "Y");
console.log(dd);
//6
let ee = [2, 4, 6];
let double = ee.map(x => x * 2);
console.log(double);
//7
let ff = [1, 2, 3, 4, 5, 6];
let even = ff.filter(x => x % 2 === 0);
console.log(even);
//8
let gg = [10, 20, 30, 40];
let sum = gg.reduce((acc, x) => acc + x, 0);
console.log(sum);
//9
let users = [
  {id: 1, name: "Anna"},
  {id: 2, name: "Ivan"},
  {id: 3, name: "Olga"}
];
console.log(users.find(u => u.id === 2));
//10
let hh = [100, 5, 20, 15];
hh.sort((a, b) => a - b);
console.log(hh);