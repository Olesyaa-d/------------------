// 1
let book = {
    title: "JavaScript Guide",
    author: "John Smith",
    year: 2020
};
console.log(book.title, book.author, book.year);
// 2
book.pages = 350;
console.log(book.pages);
// 3
delete book.year;
console.log(book);
// 4
let student = {
    "full name": "Olesya Dubinova"
};
console.log(student["full name"]);
// 5
let person = { name: "Ivan", age: 30 };
person.age += 1;
console.log(person.age); // 31
// 6
let car = {
    engine: {
        power: 150,
        type: "diesel"
    }
};
console.log(car.engine.type);
// 7
console.log(car.owner?.name);
// 8
let user = { id: 1, login: "root", isAdmin: true };
for (let key in user) {
    console.log(key, user[key]);
}
// 9
let orders = {
    id1: { product: "Phone", price: 500 },
    id2: { product: "Laptop", price: 1500 }
};
console.log(orders.id2.price);
// 10
function getValue(obj, key) {
    return obj[key];
}
console.log(getValue(user, "login"));