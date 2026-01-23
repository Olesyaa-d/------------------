function apply(fn, x) {
    return fn(x);
}
let result = apply(x => x + 1, 5);
console.log(result);