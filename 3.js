function greet(name) {
    if (name === undefined) {
        console.log("Hello, stranger");
    } else {
        console.log("Hello, " + name);
    }
}
greet("Olesya");
greet();