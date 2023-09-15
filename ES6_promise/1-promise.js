export default function getFullResponseFromAPI(success) {
  if (status === 200 || body === 'Success') {
    resolve('Success');
  } else {
    reject('Error');
  }
}
