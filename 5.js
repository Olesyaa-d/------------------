function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum = sum + num;
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([8, 6, 2]));