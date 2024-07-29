/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
const parentheseMap = {
  "(": ")",
  "[": "]",
  "{": "}"
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(parentheseMap).includes(s[i])) {
      stack.push(parentheseMap[s[i]])
    } else {
      const curr = stack.pop()
      if (curr !== s[i]) {
        return false
      }
    }
  }
  return stack.length === 0
};
// @lc code=end

