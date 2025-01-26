function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const [leftArr, rightArr] = splitArray(arr);
    // call merge sort on each half
    // merge sorted arrs
    return mergeArrs(mergeSort(leftArr), mergeSort(rightArr));
  }
}

function splitArray(arr) {
  const leftArr = arr.slice(0, arr.length / 2);
  const rightArr = arr.slice(arr.length / 2, arr.length);
  return [leftArr, rightArr];
}

function mergeArrs(arr1, arr2) {
  const returnArray = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      returnArray.push(arr1[pointer1]);
      pointer1++;
    } else {
      returnArray.push(arr2[pointer2]);
      pointer2++;
    }
  }

  while (pointer1 < arr1.length) {
    returnArray.push(arr1[pointer1]);
    pointer1++;
  }

  while (pointer2 < arr2.length) {
    returnArray.push(arr2[pointer2]);
    pointer2++;
  }

  return returnArray;
}

mergeSort([105, 79, 100, 110]);

export { mergeSort, splitArray, mergeArrs };
