// Implement the map() array method in JS

function myMap(arr, fn) {
    const mapArray = []
    for (let i = 0; i < arr.length; i++) {
        mapArray.push(fn(arr[i]))
    }
    return mapArray
}

const map = myMap([2, 4, 6, 8], arrayItem => arrayItem * 2)
console.log(map);



