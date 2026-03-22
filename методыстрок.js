//1
let str1 = "JavaScript";
console.log(str1.slice(4));
//2
let file = "report.pdf";
console.log(file.startsWith("rep"));
console.log(file.endsWith(".pdf"));
//3
let str3 = "I like cats";
console.log(str3.replace("cats", "dogs"));
//4
let str4 = "apple,banana,orange,apple";
let arr4 = str4.split(",");
let count = arr4.filter(word => word === "apple").length;
console.log(count);
//5
let str5 = "My phone number is 12345 and my code is 67890";
let numbers = str5.match(/\d+/g);
console.log(numbers);
//6
let str6 = "Hello World From JS";
let words6 = str6.split(" ");
words6[0] = words6[0].toLowerCase();
console.log(words6.join(" "));
//7
let str7 = "JavaScript is a cool language";
console.log(str7.replace("cool", "****"));
//8
let email = "user@example.com";
if (email.includes("@") && email.includes(".")) {
    console.log("Email valid");
} else {
    console.log("Invalid");
}
//9
function makeAbbr(str) {
    return str
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();
}
console.log(makeAbbr("Java Script Object Notation"));
//10
let str10 = "I love learning JavaScript programming";
let longest = str10
    .split(" ")
    .reduce((max, word) => word.length > max.length ? word : max, "");
console.log(longest);