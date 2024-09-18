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
var longestZigZag = function (root) {
  const helper = (root, isLeft, depth) => {
    if (!root) return depth;

    if (isLeft) {
      depth = Math.max(
        depth,
        helper(root.right, false, depth + 1),
        helper(root.left, true, 0)
      );
    } else {
      // right
      depth = Math.max(
        depth,
        helper(root.left, true, depth + 1),
        helper(root.right, false, 0)
      );
    }

    return depth;
  };

  return Math.max(helper(root.left, true, 0), helper(root.right, false, 0));
};
