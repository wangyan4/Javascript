class Stack {
  constructor() {
    this.items = [];
  };

  push(value) {
    this.items.push(value);
  };

  pop() {
    return this.items.pop();
  };

  peek() {
    return this.items[this.items.length - 1];
  };

  isEmpty() {
    return this.items.length === 0;
  };

  clear() {
    return this.items = [];
  };

  size() {
    return this.items.length;
  }
}
var s = new Stack();
s.push(1)
s.push(2)
s.push(3)
s.push(4)
console.log(s.items);

console.log(s.peek());
s.pop()
console.log(s.items);

console.log(s.size());
s.clear();
console.log(s.items);
