/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const isAn = (char) => {
    let code = char.charCodeAt(0);
    return (code >= 48 && code <= 57) || // 0-9
      (code >= 65 && code <= 90) || // A-Z
      (code >= 97 && code <= 122);  // a-z
  };
  let l = 0, r = s.length - 1
  while (l <= r) {
    while (l < r && !isAn(s[l])) l++
    while (l < r && !isAn(s[r])) r--
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false
    }
    l++, r--
  }
  return true
};
// @lc code=end

