# DCIT202 Mobile Application Development - Assignment 1

**Student ID:** 11150578

This README file provides a brief explanation of the tasks completed in the `arrayManipulation.js` and `userInfo.js` files.

**Task 1: arrayManipulation.js**

The `arrayManipulation.js` file contains a function named `processArray` that takes an array of numbers as input. It iterates through the array and performs the following actions:

- For even numbers: Squares the number and adds the squared value to a new array.
- For odd numbers: Triples the number and adds the tripled value to a new array.

The function returns the new array containing the modified values.

**Task 2: arrayManipulation.js **

The `arrayManipulation.js` file also includes a function named `formatArrayStrings`. This function takes two arguments:

- An array of strings.
- An array of numbers processed by the `processArray` function.

It iterates through both arrays simultaneously and modifies the strings based on the corresponding number:

- If the number is even, the function capitalizes the entire string in the string array.
- If the number is odd, the function converts the string to lowercase.

The function returns a new array containing the modified strings.

**Task 3: userInfo.js**

The `userInfo.js` file contains a function named `createUserProfiles`. This function takes two arrays as input:

- An array of original names.
- An array of modified names from the `formatArrayStrings` function in `arrayManipulation.js`.

It iterates through both arrays and creates user profiles as objects. Each object contains:

- `originalName`: The original name from the first array.
- `modifiedName`: The modified name from the second array.
- `id`: An auto-incremented ID starting from 1.

The function returns an array containing the user profile objects.
