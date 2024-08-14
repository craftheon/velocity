/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    const queue = [root], res = []
    while(queue.length) {
      const len = queue.length,
        cur = []
      for(let i = 0; i < len; i ++) {
        const curr = queue.shift()
        cur.push(curr.val)
        curr.left && queue.push(curr.left)
        curr.right && queue.push(curr.right)
      }
      res.push(cur)
    }
    return res
};
// @lc code=end

