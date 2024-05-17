function processArray(arr) {
  const modifiedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      const squaredValue = arr[i] * arr[i];

      modifiedArray.push(squaredValue);
    } else {
      const tripledValue = arr[i] * 3;

      modifiedArray.push(tripledValue);
    }
  }

  return modifiedArray;
}

function formatArrayStrings(stringArray, numberArray) {
  const modifiedStringArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    if (numberArray[i] % 2 === 0) {
      const capitalizedString = stringArray[i].toUpperCase();

      modifiedStringArray.push(capitalizedString);
    } else {
      const lowerCaseString = stringArray[i].toLowerCase();

      modifiedStringArray.push(lowerCaseString);
    }
  }
  return modifiedStringArray;
}
