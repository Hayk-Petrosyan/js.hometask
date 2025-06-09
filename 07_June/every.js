// Implement the every() array method in JS

function myEvery(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i])) {
            return false
        }
    }
    return true
}

const every = myEvery([2, 4, 6, 10], item => item < 10)
console.log(every);


