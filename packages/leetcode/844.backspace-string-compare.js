/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let ss = [], ts = []
    for(let i = 0; i < s.length; i ++) {
      s[i] !== "#" ? ss.push(s[i]) : ss.pop()
    }
    for(let i = 0; i < t.length; i ++) {
      t[i] !== "#" ? ts.push(t[i]) : ts.pop()
    }
    if (ss.length !== ts.length) return false
    for(let i = 0; i < ss.length; i ++) {
      if (ss[i] !== ts[i]) return false
    }
    return true
};
// @lc code=end

