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
// export default heap_sort;