// 2) Create a function that converts a given string to uppercase.

const convertToUppercase = function (str) {
    let upper = ""
    const space = " "

    for (let i = 0; i < str.length; i++) {
        if (str[i] === space) {
            upper += space
        } else {
            let indx = str.indexOf(str[i])
            let charCode = str.charCodeAt(indx) - 32
            upper += String.fromCharCode(charCode)
        }
    }

    return upper
}

const upperCase = convertToUppercase("hello world")
console.log(upperCase);
