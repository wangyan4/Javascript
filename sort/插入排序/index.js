 let insert_sort=(array)=>{
  let i,j,tmp;
  for (i = 0; i < array.length; i++) {
    tmp = array[i];
    for (j = i; j > 0 && array[j-1]>tmp; j--) {
      array[j] = array[j-1];
    }
    array[j]=tmp;
  }
  return array;
}
// insert_sort([6,5,3,1,8,7,2,4]);
export default insert_sort;