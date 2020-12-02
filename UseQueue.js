const Queue = require("./Queue");

const queue = new Queue();
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);

queue.display();

queue.dequeue();
queue.display();

console.log(queue.size());