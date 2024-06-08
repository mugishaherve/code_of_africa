
function transformString(input) {
    const length = input.length;

    if (length % 15 === 0) {
        // If length is divisible by 15, reverse and replace with ASCII codes
        input = input.split('').reverse().join('');
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // If length is divisible by 3, reverse the string
        return input.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // If length is divisible by 5, replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If none of the conditions are met, return the string as is
        return input;
    }
}


const input1 = "Hamburger";
console.log(transformString(input1)); // Output: "regrubmaH"

const input2 = "Pizza";
console.log(transformString(input2)); // Output: "80 105 122 122 97"

const input3 = "Chocolate Chip Cookie";
console.log(transformString(input3)); // Output: "eikooCpihCetalocohC"

const input4 = "HelloWorld";
console.log(transformString(input4)); // Output: "72 101 108 108 111 32 87 111 114 108 100"

const input5 = "Transform";
console.log(transformString(input5)); // Output: "mrofsnarT"

// Example input divisible by both 3 and 5:
const input6 = "Hello, World!!!";
console.log(transformString(input6)); // Output: "33 33 33 100 108 114 111 87 32 111 108 108 101 72"
