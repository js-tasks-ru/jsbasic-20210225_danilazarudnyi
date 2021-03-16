function getMinMax(str) {
  let newArr = [];
  let arr = str.split(',').join(' ');
  let arr2 = arr.split(' ');
  for (let i = 0; i < arr2.length; i++) {
    if (isNaN(arr2[i]) == false) {
      newArr.push(+arr2[i]);
    }
  }

  let max = newArr[0];
  let min = newArr[0];
  for (let i = 0; i < newArr.length; i++) {
    if (min > newArr[i]) {
      min = newArr[i];
    }
    if (max < newArr[i]) {
      max = newArr[i];
    }
  }

  let result = {
    min: min,
    max: max
  }
  return result;
}