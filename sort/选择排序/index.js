let select_sort = (array) => {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        var sum = 0;
        sum = array[i];
        array[i] = array[j];
        array[j] = sum;
      }
    }
  }
  return array;
}
select_sort([6, 5, 3, 1, 8, 7, 2, 4]);