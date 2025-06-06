// 6) Check if the string "Learning JavaScript" contains the substring "Java".

// Variant 1
function findSubstring(str1, str2) {

    if (str2.length === 0 || str1.length === 0) {
        return false 
    }
    
    let len = str1.length
    for (let i = 0; i < len; i++) {
        if (str1[i] === str2[0]) {
            str1 = str1.slice(i)
            len = str2.length

            for (let j = 0; j < len; j++) {
                if (str1[j] !== str2[j]) {
                    return false
                }
            }
        }
    }
    return true
}

let txt1 = "Learning JavaScript"
let txt2 = "Java"
console.log(findSubstring(txt1, txt2));

// Variant 2
// console.log(txt1.includes(txt2));