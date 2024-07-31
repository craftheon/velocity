/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  let res = true
  var traverse = function(root) {
    if (!root) return 0
    let l = traverse(root.left),
      r = traverse(root.right)
    if (Math.abs(l - r) > 1) {
      res = false
    }
    return Math.max(l, r) + 1
  }
  traverse(root)
  return res
};
// @lc code=end

