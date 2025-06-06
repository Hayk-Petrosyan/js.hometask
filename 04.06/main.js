// 2) Write a JavaScript function that creates a large number of objects in a loop and stores them in an array. 
// Ensure to simulate manual memory release by removing references.

// Create the array and the objects inside
function createObjects(n) {
    const arrayOfObjects = []

    for (let i = 0; i < n; i++) {
        const obj = {
            name: "Mike",
            age: 34,
            isMarried: true,
            children: ["Joe", "lily"]
        }

        arrayOfObjects.push(obj)
    }
    return arrayOfObjects
}

let array = createObjects(2)
console.log(array);

// Free the object, its inner array and the the outer one
for (element of array) {
    for (let key in element) {

        if (Array.isArray(element[key])) { // check whether any of the object properties is an array
            let objArr = element[key]
            for (let i = 0; i < objArr.length; i++) {
                objArr[i] = null
            }
        }

        element[key] = null
    }
}

array = null

