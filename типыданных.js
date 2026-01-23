//первое задание
let x;
console.log( typeof x);
//второе задание
console.log(typeof 10);
//третье задание
console.log(typeof "10");
//четвертое задание
console.log(typeof null);
//пятое задание
console.log("15" + 1);
//шестое задание
console.log("12" - 1);
//седьмое задание
console.log(Boolean(""));
//восьмое задание
console.log(Boolean(" "));
//девятое задание
console.log(typeof +"13");
//десятое задание
function isNumber(v) {
    if (typeof v === "number") {
        return true;
    } else {
        return false;
    }
}
console.log(isNumber(1));
console.log(isNumber("1"));
console.log(isNumber(NaN));
