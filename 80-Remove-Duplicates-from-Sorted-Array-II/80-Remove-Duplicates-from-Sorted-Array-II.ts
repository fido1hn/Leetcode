function removeDuplicates(nums: number[]): number {
  let count = 0;

  for (const num of nums) {
    if (count < 2 || num !== nums[count - 2]) {
      nums[count] = num;
      count++;
    }
  }

  return count;
}
