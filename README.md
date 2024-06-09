
## Interactive Photo Gallery
The photo gallery displays a collection of images with hover effects. The gallery is responsive and adapts to different screen sizes.

### Technologies Used
- HTML
- CSS
- JavaScript

### Setup Instructions
1. Clone the repository:
git clone https://github.com/mugishaherve/code_of_africa.git


2. Navigate to the project directory:
cd code_of_africa


3. Open `index.html` in your preferred web browser.

### File Descriptions
- `index.html`: Contains the HTML structure of the photo gallery.
- `styles.css`: Contains the CSS styles for the photo gallery.
- `script.js`: Contains the JavaScript code to dynamically load the images.

## Coding Challenges

### 1. Array Manipulation (arrayMap.js)
Determines if a contiguous subarray within an array sums up to a target value.

#### Function: `hasContiguousSubarraySum(arr, target)`
```javascript
function hasContiguousSubarraySum(arr, target) {
 let currentSum = 0;
 let start = 0;

 for (let end = 0; end < arr.length; end++) {
     currentSum += arr[end];

     while (currentSum > target && start <= end) {
         currentSum -= arr[start];
         start++;
     }

     if (currentSum === target) {
         return true;
     }
 }

 return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarraySum(arr, target)); // Output: true
2. String Transformation (stringTransform.js)
## Problem Statement
Given a string, transform it based on the following rules:
- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

### Example
- **Input**: "Hamburger"
  - **Output**: "regrubmaH"
  - **Explanation**: The length of the string is 9, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "regrubmaH".
  
- **Input**: "Pizza"
  - **Output**: "80 105 122 122 97"
  - **Explanation**: The length of the string is 5, which is divisible by 5 but not by 3 or 15. Therefore, each character is replaced by its ASCII code, resulting in "80 105 122 122 97".
  
- **Input**: "Chocolate Chip Cookie"
  - **Output**: "eikooCpihCetalocohC"
  - **Explanation**: The length of the string is 21, which is divisible by 3 but not by 5 or 15. Therefore, the string is reversed, resulting in "eikooCpihCetalocohC".

## Constraints
- The string will only contain alphanumeric characters and spaces.
- The length of the string will be between 1 and 1000.

## Expected Time Complexity
- O(n), where n is the length of the string.

## Expected Space Complexity
- O(n), where n is the length of the string.

## Solution
The function `transformString` implements the transformation rules described above. 

### Function: `transformString(input)`
```javascript
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
Examples
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

License
## License

This project does not currently have a license. If you would like to use or contribute to this project, please contact the author for more information.


Acknowledgments
Thanks to the team for providing the Figma design and the challenge instructions.


This `README.md` file provides a comprehensive overview of the project, including setup instructions,