// binary search in sorted array
function binarySearch(nums, element) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === element) {
      return mid;
    }
    if (nums[mid] > element) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return nums;
}

// test cases
binarySearch([1, 3, 5, 7, 9], 3); // 1
binarySearch([1, 3, 5, 7, 9], 7); // 3
