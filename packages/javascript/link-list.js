class LinkNode {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
}

console.log(new LinkNode(1, new LinkNode(2, new LinkNode(3))))

