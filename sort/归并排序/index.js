let merge=(a,b)=>{
  let n = a && a.length,
      m = b && b.length,
      result=[],
      i=0,
      j=0;
  while(i<n && j<m){
    if(a[i]<=b[j]){
      result.push(a[i++]);
    }else{
      result.push(b[j++]);
    }
  }
  while(i<n){
    result.push(a[i++]);
  }
  while(j<m){
    result.push(b[j++]);
  }
  return result;
}

let merge_sort=(array)=>{
  let len = array.length;
  if(len == 1){
    return array;
  }
  let mid = Math.floor(len/2);
  let left = array.slice(0,mid);
  let right = array.slice(mid,len);

  return merge(merge_sort(left),merge_sort(right));
}
merge_sort([6,5,3,1,8,7,2,4]);
// export default merge_sort;