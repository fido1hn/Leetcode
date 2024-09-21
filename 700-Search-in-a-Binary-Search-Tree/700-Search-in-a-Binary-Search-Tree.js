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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let curr_node = root;
  while (curr_node) {
    if (curr_node.val === val) {
      return curr_node;
    } else if (val > curr_node.val) {
      curr_node = curr_node.right;
    } else {
      curr_node = curr_node.left;
    }
  }
  return null;
};
