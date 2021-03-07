// calculate sum of a numerical array recursively
function arraySum(nums, total = 0, i = 0) {
  if (i === nums.length) {
    return total;
  }
  total += nums[i];
  return arraySum(nums, total, i + 1);
}

// test case
arraySum([1, 2, 3, 4]); // 10
arraySum([1, 2, 3, 4, 5, 6, 7]); // 28
