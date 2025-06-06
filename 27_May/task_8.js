// 8) Compute the sum of all elements in the array let expenses = [50, 75, 100];

const expenses = [50, 75, 100]
const len = expenses.length
let sum = 0;

for (i = 0; i < len; i++) {
    sum += expenses[i]
}

console.log(sum);