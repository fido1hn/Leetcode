/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  //helper function to check if a cell is valid
  let isValid = (row, col) => {
    return (
      row >= 0 &&
      col >= 0 &&
      row < maze.length &&
      col < maze[0].length &&
      maze[row][col] !== '+'
    );
  };
  //helper function to determine when we are at an exit
  let isExit = (row, col) => {
    return (
      (row === 0 ||
        col === 0 ||
        row === maze.length - 1 ||
        col === maze[0].length - 1) &&
      maze[row][col] === '.'
    );
  };
  //initializing an array to store seen nodes
  let seen = [];
  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }
  //marking the entrance as seen
  seen[entrance[0]][entrance[1]] = true;
  //initializing our entrance node in the queue
  let queue = [entrance];
  let dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  let steps = 0;

  while (queue.length) {
    let nextQueue = [];
    //because our entrance is not an exit, we have to take a step
    steps++;
    //for every node in our queue
    for (let i = 0; i < queue.length; i++) {
      //get its row and column
      let [row, col] = queue[i];
      //iterate over the directions of every potential neighbor to check them
      for (const [dx, dy] of dir) {
        let nextRow = row + dx,
          nextCol = col + dy;
        //if a node is valid and we have not seen it, then we:
        if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
          //see if its an exit -- if it is, return steps
          if (isExit(nextRow, nextCol)) {
            return steps;
          } else {
            //otherwise we mark it as seen and push it into the queue so we can check its neighbors
            seen[nextRow][nextCol] = true;
            nextQueue.push([nextRow, nextCol]);
          }
        }
      }
    }
    //reup our queue
    queue = nextQueue;
  }
  return -1;
};
