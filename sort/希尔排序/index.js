let shell_sort = (array) => {
  let i, j, tmp, gap, len = array.length;
  for (gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (i = gap; i < len; i++) {
      tmp = array[i];
      for (j = i; j > 0 && array[j - gap] > tmp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = tmp;
    }
  }
  return array;
}
shell_sort([6, 5, 3, 1, 8, 7, 2, 4]);
// export default shell_sort;