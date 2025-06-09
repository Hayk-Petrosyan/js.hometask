// Implement the filter() array method in JS

function myFilter(arr, func) {
    const filteredArray = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            filteredArray.push(arr[i])
        }
    }
    return filteredArray
}

const filter = myFilter(["hello", "bye", "fine", "hi", "today"], arrayItem => arrayItem.length < 4)
console.log(filter);



