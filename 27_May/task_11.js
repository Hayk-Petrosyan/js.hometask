// 11) Create a function that accepts a number and returns whether it is even or odd.

function oddOrEven (num) {

    if (num === 0) {
        return num
    }

    if (!(num % 2)) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(oddOrEven(3));