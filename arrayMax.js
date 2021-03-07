// find the maximum element in numerical array recursively
function arrayMax(nums, max = Number.MIN_SAFE_INTEGER, i = 0) {
  if (i === nums.length) {
    return max;
  }
  max = nums[i] - max > 0 ? nums[i] : max;
  return arrayMax(nums, max, i + 1);
}

// test case
arrayMax([1, 2, 3, 4]); // 4
arrayMax([1, 2, 3, 4, 5, 6, 7]); // 7
