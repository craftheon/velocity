/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [start, end] = newInterval,
    left = [],
    right = [];
  for (const interval of intervals) {
    const [first, last] = interval;
    if (last < start) {
      left.push(interval)
    } else if (end < first) {
      right.push(interval)
    } else {
      start = Math.min(start, first);
      end = Math.max(end, last);
    }
  }
  return [...left, [start, end], ...right];
};
// @lc code=end

