function bubbleSort(array) {
  var length = array.length,
    i,
    j,
    temp;
  for (i = length - 1; 0 < i; i--) {
    for (j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {  // 相邻元素两两对比
        temp = array[j];              // 元素交换
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
