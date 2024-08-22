/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0, l = 0, r = 0, cache = new Set()
    while(r < s.length) {
      if (!cache.has(s[r])) {
        cache.add(s[r])
        ans = Math.max(ans, r - l + 1)
        r ++
      } else {
        cache.delete(s[l])
        l ++
      }
    }
    return ans
};
// @lc code=end

