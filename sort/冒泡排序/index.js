let bubble_sort = (array) => {
  let i, j, tmp, gap, len = array.length, swiper = true;

  while (swiper) {
    swiper = false;
    for (i = 0; i < len; ++i) {
      if (array[i] > array[i + 1]) {
        array[i] -= array[i + 1];
        array[i + 1] += array[i];
        array[i] = array[i + 1] - array[i];
        swiper = true;
      }
    }
  }

  return array;
}
bubble_sort([6, 5, 3, 1, 8, 7, 2, 4]);
// export default bubble_sort;