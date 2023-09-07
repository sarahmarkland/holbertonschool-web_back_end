export default function concatArrays(array1, array2, string) {
  const arr1 = [...array1];
  const arr2 = [...array2];
  const arr3 = [...string];
  const arr4 = [...arr1, ...arr2, ...arr3];

  console.log(arr4);
}
