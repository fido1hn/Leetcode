/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visited = new Set();
  let keyList = new Set();

  function dfs(currRoom, currKeys) {
    if (visited.has(currRoom)) return;
    visited.add(currRoom);

    for (let key of rooms[currRoom]) {
      currKeys.add(key);
    }

    for (let key of currKeys) {
      dfs(key, currKeys);
    }
  }
  dfs(0, keyList);

  return visited.size === rooms.length;
};
