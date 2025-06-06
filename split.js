function splitBySeparator(str, separator) {
    let newStr = str.toLowerCase()
    let separatorIndex = newStr.indexOf(separator);
    let splitString = "";
    const splitArray = [];

    while (newStr.includes(separator)) {
        splitString = newStr.slice(0, separatorIndex);
        splitArray.push(splitString);
        newStr = newStr.slice(separatorIndex + 1);
        separatorIndex = newStr.indexOf(separator);
    }

    splitArray.push(newStr)
    return splitArray
}

// const mysString= "Happy birthday to you!"
// const result = splitBySeparator(mysString, "h") // [ '', 'appy birt', 'day to you!' ]
// console.log(result);
// ----------------------------------------------------------------------------

function splitIntoWords(str) {
    const space = " ";
    let indexOfSpace = str.indexOf(space);
    let word = "";
    const wordArray = [];

    while (str.includes(space)) {
        word = str.slice(0, indexOfSpace);
        wordArray.push(word);
        str = str.slice(indexOfSpace + 1);
        indexOfSpace = str.indexOf(space);
    }

    wordArray.push(str)
    return wordArray
}

// const str = "Happy birthday to you!"
// const res = splitIntoWords(str)
// console.log(res);
// ----------------------------------------------------------------------------

// The main code
function mySplit (string, separator) {
    const charArr = []
    let len = string.length

    if (string.length !== 0 && separator === " ") {
        return splitIntoWords(string)
    } else if (string.length !== 0 && separator === "") {
        for (let i = 0; i < len; i++) {
            charArr.push(str[i])
        }
        return charArr
    }  else if (string.length !== 0 && typeof(separator) !== "undefined") {
        return splitBySeparator(string, separator)
    } else if (string.length !== 0 && typeof(separator) === "undefined") {
        charArr.push(string)
    }

    return charArr
}

const splitString = "Happy birthday to you!"
const separator = "h"
const splitResult = mySplit(splitString)
console.log(splitResult);
