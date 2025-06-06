// 1) Write a function that takes a string as an argument and returns the number of characters in the string.

function countCharacters (txt) {
    let charCount = 0;
    const space = " "

    for (const char of txt) {
        if (char !== space) {
            charCount++
        }
    }

    return charCount
}

const str = "hello world"
const count = countCharacters(str)
console.log(count);