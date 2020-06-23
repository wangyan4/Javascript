# 排序算法

+ <a href="#bubble">冒泡排序</a>
+ <a href="#insert">插入排序</a>
+ <a href="#shell">希尔排序</a>
+ <a href="#merge">归并排序</a>
+ <a href="#heap">堆排序</a>
+ <a href="#quick">快速排序</a>
+ <a href="#select">选择排序</a>





#### <a name="bubble">冒泡排序</a>

![冒泡排序](/gif/bubble.gif)



``` javascript
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
```

#### <a name="insert">插入排序</a>

![插入排序](gif/insertSort.gif)

``` javascript
let insert_sort = (array) => {
  let i, j, tmp;
  for (i = 0; i < array.length; i++) {
    tmp = array[i];
    for (j = i; j > 0 && array[j - 1] > tmp; j--) {
      array[j] = array[j - 1];
    }
    array[j] = tmp;
  }
  return array;
}
insert_sort([6, 5, 3, 1, 8, 7, 2, 4]);
```

#### <a name="shell">希尔排序</a> 

​	**插入排序的升级版 通过控制步长来进行插入排序**

![希尔排序](gif/shellsort.png)

```javascript
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
shell_sort([8,9,1,7,2,3,5,4,6,0]);
```



#### <a name="merge">归并排序</a>

![归并排序](gif/mergesort.gif)

``` java script
let merge = (a, b) => {
  let n = a && a.length,
    m = b && b.length,
    result = [],
    i = 0,
    j = 0;
  while (i < n && j < m) {
    if (a[i] <= b[j]) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }
  while (i < n) {
    result.push(a[i++]);
  }
  while (j < m) {
    result.push(b[j++]);
  }
  return result;
}

let merge_sort = (array) => {
  let len = array.length;
  if (len == 1) {
    return array;
  }
  let mid = Math.floor(len / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, len);

  return merge(merge_sort(left), merge_sort(right));
}
merge_sort([6, 5, 3, 1, 8, 7, 2, 4]);
```



#### <a name='heap'>堆排序</a>

![堆排序](gif/heapsort.gif)

``` javascript
let len;
let buildheap = (arr) => {   //建堆
    len = arr.length;
    for (var i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(arr, i);
    }
}
function heapify(arr, i) { //调整堆
    var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}
let swap = (arr, i, j) => { //交换两个节点

    // 第一种交换两个数字

    // var temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;

    // 第二种交换两个数字
    arr[i] -= arr[j];
    arr[j] += arr[i];
    arr[i] = arr[j] - arr[i]

}
let heap_sort = (arr) => {
    buildheap(arr);
    for (var i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i); //交换堆根节点和最后一个节点
        len--; //最后一个节点出堆
        heapify(arr, 0); //调整堆
    }
    return arr;
}
heap_sort([6, 5, 3, 1, 8, 7, 4, 2]);
```

#### <a name="quick">快速排序</a>

![](gif/quicksort.gif)

``` javascript
//方法一
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

//方法二
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
```

#### <a name="select">选择排序</a>

![选择排序](gif/selectsort.gif)

``` javascript
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
```

