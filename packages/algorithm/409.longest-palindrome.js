/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let cache = new Map(), res = 0
  for (const char of s) {
    if (cache.has(char)) {
      cache.delete(char)
      res += 2
    } else {
      cache.set(char)
    }
  }
  return cache.size > 0 ? res + 1 : res;
};
// @lc code=end

