class BinaryTree {
  constructor(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
  }
}
/**
 *     1
 *   2   3
 * 4  5 6  7
 * 
 */
const tree = new BinaryTree(1,
  new BinaryTree(2,
    new BinaryTree(4),
    new BinaryTree(5)
  ),
  new BinaryTree(3,
    new BinaryTree(6),
    new BinaryTree(7)
  )
)

function preorder(node) {
  const res = []
  const traverse = function (node) {
    if (!node) return null
    res.push(node.val)
    traverse(node.left)
    traverse(node.right)
  }
  traverse(node)
  return res
}
console.log(preorder(tree))

function inorder(node) {
  const res = []
  const traverse = function (node) {
    if (!node) return null
    traverse(node.left)
    res.push(node.val)
    traverse(node.right)
  }
  traverse(node)
  return res
}
console.log(inorder(tree))

function postorder(node) {
  const res = []
  const traverse = function (node) {
    if (!node) return null
    traverse(node.left)
    traverse(node.right)
    res.push(node.val)
  }
  traverse(node)
  return res
}
console.log(postorder(tree))


function bfs(node) {
  const queue = [node], res = []
  while (queue.length) {
    const cur = queue.shift()
    res.push(cur.val)
    cur.left && queue.push(cur.left)
    cur.right && queue.push(cur.right)
  }
  return res
}
console.log(bfs(tree))

function bfs_level(node) {
  const queue = [node], res = []
  while (queue.length) {
    const len = queue.length,
      cur = []
    for (let i = 0; i < len; i++) {
      const curr = queue.shift()
      cur.push(curr.val)
      curr.left && queue.push(curr.left)
      curr.right && queue.push(curr.right)
    }
    res.push(cur)
  }
  return res
}
console.log(bfs_level(tree))
