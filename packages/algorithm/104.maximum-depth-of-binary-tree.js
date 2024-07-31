/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function (root) {
  let depth = 0, res = 0
  const traverse = function (root) {
    if (!root) return null
    depth++
    if (root.left == null && root.right == null) { // tree bottom
      res = Math.max(res, depth);
    }
    traverse(root.left)
    traverse(root.right)
    depth--
  }
  traverse(root)
  return res
};
// @lc code=end

