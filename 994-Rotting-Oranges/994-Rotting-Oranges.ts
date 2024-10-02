function orangesRotting(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  let freshOranges = 0; // Counter for fresh oranges
  const queue: [number, number][] = []; // Queue to store positions of rotten oranges

  // Populate the queue with the initial positions of rotten oranges and count fresh oranges
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      } else if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  let minutes = 0; // Counter for elapsed minutes
  // Directions for the adjacent cells (up, right, down, left)
  const directions = [1, 0, -1, 0, 1];

  // Loop until there are no more fresh oranges or the queue is empty
  while (freshOranges !== 0 && queue.length !== 0) {
    const currentLevelSize = queue.length; // Number of rotten oranges at the current minute

    // Convert adjacent fresh oranges to rotten for each rotten orange in the queue
    for (let i = 0; i < currentLevelSize; i++) {
      const current = queue.shift();
      if (current) {
        const [x, y] = current; // Get the next rotten orange position

        // Check all four directions around the rotten orange
        for (let j = 0; j < 4; j++) {
          const newX = x + directions[j];
          const newY = y + directions[j + 1];

          // If the adjacent cell has a fresh orange, convert it to rotten
          if (
            newX >= 0 &&
            newX < rows &&
            newY >= 0 &&
            newY < cols &&
            grid[newX][newY] === 1
          ) {
            grid[newX][newY] = 2;
            queue.push([newX, newY]); // Add the new rotten orange position to the queue
            freshOranges--; // Decrease the count of fresh oranges
          }
        }
      }
    }

    minutes++; // Increment the minutes after each level of adjacency check
  }

  // If there are any remaining fresh oranges, return -1, otherwise return the elapsed minutes
  return freshOranges !== 0 ? -1 : minutes;
}
