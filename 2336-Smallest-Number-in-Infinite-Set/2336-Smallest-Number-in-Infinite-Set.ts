class SmallestInfiniteSet {
  smallest: number;
  available: number[];

  constructor() {
    this.smallest = 1;
    this.available = [];
  }

  popSmallest(): number {
    const small = Math.min(this.smallest, this.available[0] || Infinity);
    if (small == this.smallest) {
      this.smallest++;
    }
    if (small == this.available[0]) {
      this.available.shift();
    }
    return small;
  }

  addBack(num: number): void {
    if (num < this.smallest && !this.available.includes(num)) {
      this.available.push(num);
      this.available.sort((a, b) => a - b);
    }
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
