let quick_sort = (array) => {
  let i,
    pivot = array[0],
    len = array.length,
    left = [],
    right = [];
  if (len <= 1) return array;
  for (i = 1; i < len; ++i) {
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quick_sort(left).concat([pivot], quick_sort(right));


}
quick_sort([6, 5, 3, 1, 8, 7, 2, 4]);


let quick_sort2 = (array, i, j) => {
  if (i < j) {
    let left = i,
      right = j,
      pivot = array[left];
    while (i < j) {
      while (i < j && array[j] >= pivot) { //先从后往前
        j--;
      }
      if (i < j) {
        array[i++] = array[j];
      }
      while (i < j && array[i] <= pivot) {//从前往后
        i++;
      }
      if (i < j) {
        array[j--] = array[i]
      }
    }
    array[i] = pivot;
    quick_sort2(array, left, i - 1);
    quick_sort2(array, i + 1, right);
    return array;
  }
}
quick_sort2([6, 5, 3, 1, 8, 7, 2, 4], 0, 7);