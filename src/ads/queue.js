
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enq(value) {
    let newTail = {
      value: value,
      next: null,
    }

    if (this.tail) {
      this.tail.next = newTail;
      this.tail = newTail;
    } else {
      this.head = newTail;
      this.tail = newTail;
    }

    return ++this.length;
  }

  deq() {
    if (this.head) {
      let value = this.head.value;
      this.head = this.head.next;
      this.tail = this.head ? this.tail : null;
      this.length--;
      return value;
    } else {
      throw 'queue is empty';
    }
  }
}


