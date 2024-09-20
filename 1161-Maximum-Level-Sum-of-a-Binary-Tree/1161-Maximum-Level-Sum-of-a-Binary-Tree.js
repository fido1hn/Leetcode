/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  const queue = [root];
  let result = 0;
  let current = 0;
  let resultSum = -Infinity;

  while (queue.length) {
    ++current;
    const size = queue.length;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      const fnode = queue.shift();
      if (fnode.left) queue.push(fnode.left);
      if (fnode.right) queue.push(fnode.right);
      sum += fnode.val;
    }
    result = sum > resultSum ? current : result;
    resultSum = Math.max(resultSum, sum);
  }

  return result;
};
