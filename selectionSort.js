// selection sort inplace
function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    [nums[i], nums[min]] = [nums[min], nums[i]];
  }
  return nums;
}

// test cases
selectionSort([3, 6, 1, 5, 2]); // [1, 2, 3, 5, 6]
selectionSort(["d", "c", "a", "b"]); // ["a", "b", "c", "d"]

