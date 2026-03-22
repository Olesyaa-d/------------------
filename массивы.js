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
let Users = [
  {id: 1, name: "Anna"},
  {id: 2, name: "Ivan"},
  {id: 3, name: "Olga"}
];
console.log(Users.find(u => u.id === 2));
//10
let hh = [100, 5, 20, 15];
hh.sort((a, b) => a - b);
console.log(hh);
//11
const users = [  {id: 1, name: "Anna", age: 25, city: "Moscow", salary: 80000},
  {id: 2, name: "Ivan", age: 30, city: "SPb", salary: 120000},
  {id: 3, name: "Olga", age: 22, city: "Moscow", salary: 60000},
  {id: 4, name: "Alex", age: 35, city: "SPb", salary: 150000}
];
let c = users.filter(user => user.city === "Moscow" && user.age > 23);
c.sort((a, b) => b.salary - a.salary);
console.log(c);
//12
const matrix = [  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
matrixx = matrix.flat();
let m = matrixx.filter(x => x % 2 !== 0);
let doubled = m.map(x => x * 2);
doubled.sort((a, b) => b - a);
console.log(doubled);
console.log('111111111');
//13
const products = [  {id: 1, name: "Ноутбук", price: 25000},
  {id: 2, name: "Мышь", price: 800},
  {id: 3, name: "Клавиатура", price: 1200},
  {id: 4, name: "Наушники", price: 1500}
];
let pr = products.filter(p => p.price < 1000);
pr.sort((a, b) => a - b);
console.log(pr);
//14
const userss = [  {id: 1, name: "Иван", email: "ivan@mail.com"},
  {id: 2, name: "Мария", email: "maria@mail.com"},
  {id: 3, name: "Алексей", email: "alex@mail.com"}
];

const searchEmail = "maria@mail.com";
console.log(userss.find(u => u.email === searchEmail));
//15
const cartItems = [  {id: 1, name: "Футболка", price: 500, quantity: 2},
  {id: 2, name: "Джинсы", price: 2000, quantity: 1},
  {id: 3, name: "Кроссовки", price: 3000, quantity: 1}
];
let fullprice = cartItems.reduce((acc, x) => acc + x.price * x.quantity, 0);
console.log(fullprice);
//16
const use = [  {id: 1, name: "Иван", age: 25},
  {id: 2, name: "Мария", age: 30},
  {id: 3, name: "Алексей", age: 28}
];
 let copy = use.map(e => e.name);
console.log(copy);
//17
const product = [  {id: 1, name: "Телефон", price: 15000},
  {id: 2, name: "Планшет", price: 25000},
  {id: 3, name: "Ноутбук", price: 45000}
];
let exp = product.sort((a, b) => a.price - b.price);
console.log(exp.pop());
//18
const cart = [  {id: 1, name: "Книга", price: 500},
  {id: 2, name: "Ручка", price: 50},
  {id: 3, name: "Блокнот", price: 200}
];

const productIdToCheck = 2;
console.log(cart.find(u => u.id === productIdToCheck));
//19
let ccart = [  {id: 1, name: "Книга", price: 500},
  {id: 2, name: "Ручка", price: 50},
  {id: 3, name: "Блокнот", price: 200}
];

const productIdToRemove = 2;
let newcart = ccart.filter(u => u.id !== productIdToRemove);
console.log(newcart);
//20
let carttt = [  {id: 1, name: "Книга", price: 500},
  {id: 2, name: "Ручка", price: 50}
];

const newProduct = {id: 3, name: "Карандаш", price: 30};
if (carttt.find(u => u !== newProduct)) {carttt.push(newProduct)};
console.log(carttt)