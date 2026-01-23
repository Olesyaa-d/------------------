function filterByLength(words, minLen) {
    let result = [];

    for (let word of words) {
        let count = 0;
        for (let char of word) {
            count = count + 1;
        }

        if (count > minLen) {
            result.push(word);
        }
    }
    return result;
}
console.log(filterByLength(["bfgkgkgk", "kkk", "jjjjjjjj"], 6));
