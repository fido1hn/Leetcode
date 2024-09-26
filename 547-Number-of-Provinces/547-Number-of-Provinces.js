/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let adj = {};

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = 0; j < isConnected[0].length; j++) {
      let val = isConnected[i][j];
      if (val === 1) {
        if (!adj[i]) {
          adj[i] = [j];
        } else {
          adj[i].push(j);
        }
      }
    }
  }

  let visited = new Set();
  let count = 0;

  for (let key in adj) {
    let keyNum = parseInt(key);
    count += dfs(keyNum);
  }

  function dfs(currNode) {
    if (visited.has(currNode)) return 0;
    visited.add(currNode);

    let neighbors = adj[currNode];

    for (let n of neighbors) {
      dfs(n);
    }

    return 1;
  }

  return count;
};
