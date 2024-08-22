/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sa = s.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt()),
    ta = t.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt())
  if(ta.length !== sa.length) return false
  for(let i = 0; i < ta.length; i ++) {
    if (sa[i] !== ta[i]) return false
  }
  return true
};
// @lc code=end

