// Implement the indexof() array method in JS

function myIndexOf(arr, element, start = 0) {
    let length = arr.length
    if (start < 0) start = Math.max(length + start, 0)

    for (let i = start; i < length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

const indexOf = myIndexOf([11, 30, 9, 22, 9, 10, 9], 9, -3)
console.log(indexOf);
