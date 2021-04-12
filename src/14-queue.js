const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.listNode = new ListNode();
  }

  size() {
    let size = 0;
    if (this.listNode.value !== null) {
      size++;
    }

    let currentNode = this.listNode;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      size++;
    }

    return size;
  }

  enqueue(element) {
    if (this.listNode.value == null) {
      this.listNode = new ListNode(element);
    } else {
      let currentNode = this.listNode;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = new ListNode(element);
    }
  }

  dequeue() {
    const element = this.listNode.value;
    this.listNode = this.listNode.next;
    return element;
  }
}

module.exports = Queue;
