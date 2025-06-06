// 4) Reverse the string "hello" without using a built-in function.

const reverseString = function (txt) {
    let reversedTxt = ""
    const len = txt.length - 1

    for (let i = len; i >= 0; i--) {
        reversedTxt += txt[i]
    }

    return reversedTxt
}

const reverse = reverseString("hello world")
console.log(reverse);