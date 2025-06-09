// Implement the forEach() array method in JS

function myForEach(arr, func) {
    let length = arr.length

    for (let i = 0; i < length; i++) {
        func(arr[i])
    }
}

const array = [11, 30, 9, 22, 9, 10, 9]
const forEach = myForEach(array, elements => console.log(elements * 2))
console.log(forEach);