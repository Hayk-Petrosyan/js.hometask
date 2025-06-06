// 7) Find the index of the value 9 in the array let numList = [3, 6, 9, 12];.

// Variant 1
const numList = [3, 6, 9, 12];
const target = 9;
const len = numList.length
let index = 0;

for (let i = 0; i < len; i++) {
    if (numList[i] === target) {
        index = i
    }
}

console.log(index);

// Variant 2
// const indx = numList.indexOf(target)
// console.log(indx);