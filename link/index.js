//节点
function Node(element) {
  this.element = element;
  this.next = null;
}
// 初始化链表
function List() {
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.findPrev = findPrev;
  this.display = display;
}
// 查找节点
function find (item){
  var current = this.head;
  while(current.element != item){
    current = current.next;
  }
  return current;
}
// 在item后面插入节点
function insert(node,item){
  var newNode = new Node(node);
  var current =  this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}
// 移除节点
function remove(item){
  var current = this.findPrev(item);
  if(current.next){
    current.next = current.next.next;
  }
}
// 打印链表
function display(){
  var current = this.head;
  while(!(current.next == null)){
    console.log(current.next.element);
    current = current.next;
  }
}
// 查找item的前一个结点
function findPrev(item){
  var current = this.head;
  while(current.next !== null && current.next.element !== item) {
    current = current.next;
  }
  return current;
}
var fruit = new List();
fruit.insert('apple','head');
fruit.insert('orange','apple');
fruit.insert('banana','orange');
fruit.insert('peach','banana');
fruit.display();
fruit.remove('banana');
console.log(fruit.findPrev('orange'));
fruit.display();
