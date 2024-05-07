/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(!this.head) this.head = newNode;
    if(!this.tail) this.tail = newNode;

    this.tail = newNode;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

  }

  /** pop(): return & remove last item. */

  pop() {
    // handle if empty list.
    if(!this.head){
      return null
    }
    //handle if one node
    if(!this.head.next){
      const value = this.head.value;
      this.head =null;
      return value;
    }
    
    let currentNode = this.head;
    let previousNode = null;

    while(currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    return currentNode.value;

  }

  /** shift(): return & remove first item. */

  shift() {
    //handle if empty list
    if(!this.head) return null

    const value = this.head.value;
    this.head = this.head.next;

    return value;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx <0 || idx > this.length) {
      console.log("Index Out of Range");
    }

    let currentNode = this.head;
    let nodeIdx = 0;

    while (nodeIdx , idx) {
      currentNode = currentNode.next;
      nodeIdx ++;
    }
    return currentNode.value;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    let nodeIdx = 0;

    while(nodeIdx !== idx) {
      currentNode = currentNode.next;
      nodeIdx ++;
    }
    currentNode.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.head;
    let previousNode = null;
    let nodeidx = 0;

    while(nodeidx != idx) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      nodeidx ++;
    }

    const newNode = new Node(val);
    previousNode.next = newNode;
    currentNode.next = currentNode;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    let previousNode = null;
    let nodeIdx = 0;

    while(nodeIdx != idx) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      nodeIdx ++;
    }
    //reassign the nodes adjacent to node on idx. 
    previousNode.next = currentNode.next;

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
    
}

module.exports = LinkedList;
