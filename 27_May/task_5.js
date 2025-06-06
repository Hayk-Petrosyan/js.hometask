// 5) Merge the arrays let array1 = [1, 2]; and let array2 = [3, 4]; into a new array.

const mergeArrays = (arr1, arr2) => {
    const mergedArray = []
    let len = arr1.length
    for (let i = 0; i < len; ++i) {
        // variant 2
        // mergedArray.push(arr1[i])
        mergedArray[i] = arr1[i]

        if (arr1.length == mergedArray.length) {
            len = arr2.length
            for (let j = 0; j < len; ++j) {
                mergedArray[len + j] = arr2[j]
                // variant 2
                // mergedArray.push(arr2[j])
            }
        }
    }

    return mergedArray
}
const array1 = [1, 2];
const array2 = [3, 4];
console.log(mergeArrays(array1, array2));

