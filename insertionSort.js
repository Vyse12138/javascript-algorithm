// insertion sort inplace
function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length && nums[j-1] > nums[j]; j--) {
      [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
    }
  }
  return nums;
}

// test cases
insertionSort([3, 6, 1, 5, 2]); // [1, 2, 3, 5, 6]
insertionSort(["d", "c", "a", "b"]); // ["a", "b", "c", "d"]

