/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const diffValue = target - nums[i]
    if (map.has(diffValue)) {
      return [map.get(diffValue), i]
    }
    map.set(nums[i], i)
  }
  return []
};
// @lc code=end

