function selectionSort(array) {
  var length = array.length,
    i,
    j,
    minIndex,
    minValue,
    temp;
  for (i = 0; i < length - 1; i++) {
    minIndex = i;
    minValue = array[minIndex];
    for (j = i + 1; j < length; j++) {
      if (array[j] < minValue) {
        minIndex = j;
        minValue = array[minIndex];
      }
    }

    // 交换位置
    temp = array[i];
    array[i] = minValue;
    array[minIndex] = temp;
  }
  return array;
}
selectionSort([5, 3, 6, 2, 10])