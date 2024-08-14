/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    for(let i = 0; i < nums.length; i ++) {
      if (nums[i - 1] === nums[i]) continue;
      let l = i + 1, r = nums.length - 1
      while(l < r) {
        const sum = nums[i] + nums[l] + nums[r]
        if (sum === 0) {
          res.push([nums[i], nums[l], nums[r]])
          while(nums[l] === nums[l + 1]) l ++
          while(nums[r] === nums[r - 1]) r --
          l ++
          r --
        } else if (sum > 0) {
          r --
        } else {
          l ++
        }
      }
    }
    return res
};
// @lc code=end

