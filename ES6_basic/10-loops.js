export default function appendToEachArrayValue(array, appendString) {
  const makeArray = [];
  for (const value of array) {
    makeArray.push(appendString + value);
  }

  return makeArray;
}
