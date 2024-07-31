/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function(root) {
    let res = 0
    const reserve = function(root) {
      if (!root) return null
      let l = reserve(root.left),
        r = reserve(root.right)
      res = Math.max(res, l + r)
      return Math.max(l, r) + 1
    }
    reserve(root)
    return res
};
// @lc code=end

