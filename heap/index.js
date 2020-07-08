let heap = [];
function swap(idx1,idx2){
　　let temp;
　　temp = heap[idx1];
　　heap[idx1] = heap[idx2];
　　heap[idx2] = temp;
}
function shiftup(idx){
　　let _idx = Math.floor((idx - 1) / 2);
　　if(idx != 0 && heap[_idx] < heap[idx]){
　　swap(_idx,idx);
　　shiftup(_idx);
}
}
function shiftDown(idx){
　　if(idx * 2 + 1 < heap.length && heap[idx * 2 + 1] > heap[idx]){
　　　　swap(idx * 2 + 1,idx);
　　　　shiftDown(idx * 2 + 1);
　　}else if(idx * 2 + 2 < heap.length && heap[idx * 2 + 2] > heap[idx]){
　　　　swap(idx * 2 + 2,idx);
　　　　shiftDown(idx * 2 + 2);
　　}
}
function insert(val){
　　heap.push(val);
　　shiftup(heap.length - 1);
}
function remove(){
　　swap(0,heap.length - 1);
　　heap.pop();
　　shiftDown(0);
　　return heap[0];
}
insert(1);
insert(3);
insert(2);
insert(5);
remove();
insert(4);
insert(6);
remove();
console.log(heap);//4