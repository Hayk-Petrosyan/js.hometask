// Implement the some() array method in JS

function mySome(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            return true
        }
    }
    return false
}

const some = mySome([11, 30, 9, 22], arrayElem => arrayElem < 10)
console.log(some);


