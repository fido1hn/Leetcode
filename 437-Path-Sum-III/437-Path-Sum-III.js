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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  const dfs = (node, prevSum) => {
    if (!node) return;
    let currSum = prevSum + node.val;
    let x = currSum - targetSum;
    if (x in frequency) {
      count += frequency[x];
    }
    if (currSum in frequency) {
      frequency[currSum] += 1;
    } else {
      frequency[currSum] = 1;
    }

    dfs(node.left, currSum);
    dfs(node.right, currSum);
    frequency[currSum] -= 1;
  };

  let count = 0;
  let frequency = { 0: 1 };

  dfs(root, 0);
  return count;
};
