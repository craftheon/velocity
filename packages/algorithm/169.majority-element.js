/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let cache = new Map(), res = 0, maxLen = 0
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    cache.set(cur, cache.has(cur) ? cache.get(cur) + 1 : 1)
  }
  cache.forEach((v, k) => {
    if (v > maxLen) {
      res = k
      maxLen = v
    }
  })
  return res
};
// @lc code=end

