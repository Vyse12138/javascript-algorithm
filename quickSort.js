// quick sort inplace
function quickSort(nums) {
  if (nums.length < 2) {
    return nums;
  }
  let pivot = nums[0];
  let lower = [],
    higher = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > pivot) {
      higher.push(nums[i]);
    } else {
      lower.push(nums[i]);
    }
  }
  return quickSort(lower).concat(pivot, quickSort(higher));
}

// test cases
quickSort([3, 2, 4, 1]); // [1, 2, 3, 4]
quickSort([5, 4, 2, 65, 34, 23, 2, 55, 64, 3, 2, 1]); // [1, 2, 2, 2, 3, 4, 5, 23, 34, 55, 64, 65]

// 2 lines version 
function quickSort(nums) {
  if (nums.length < 2) return nums;
  return quickSort(nums.slice(1).filter(el => el <= nums[0])).concat(nums[0], quickSort(nums.slice(1).filter(el => el > nums[0])));
}
