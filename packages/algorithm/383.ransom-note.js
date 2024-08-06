/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ra = ransomNote.split(''),
    ma = magazine.split('')
  while (ra.length) {
    const curIndex = ma.indexOf(ra.pop())
    if (curIndex === -1) return false
    ma.splice(curIndex, 1)
  }
  return true
};
// @lc code=end

