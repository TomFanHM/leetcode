---
layout: ../../layout/MarkdownLayout.astro
id: 15
title: 3Sum
description: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
date: May 25, 2023
tags: [Array, Two Pointers, Sorting]
difficulty: Medium
draft: false
---

## Problem

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

### Case 1

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
```

### Case 2

```
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
```

### Case 3

```
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
```

### Constraints

```
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
```

### Solution

It involves using two pointers to find all unique triplets within the array that add up to zero.

```typescript
function threeSum(nums: number[]): number[][] {
  const temp: number[][] = [];
  const memo: Record<string, boolean> = {};
  const asc = nums.sort((a, b) => a - b);

  for (let i = 0; i <= asc.length - 3; i++) {
    let left = i + 1;
    let right = asc.length - 1;

    while (left < right) {
      const sum = asc[i] + asc[left] + asc[right];

      if (sum === 0) {
        // Check patterns
        const pattern = [asc[i], asc[left], asc[right]].join(",");
        if (memo[pattern]) {
          left++;
        } else {
          // New pattern
          temp.push([asc[i], asc[left], asc[right]]);
          memo[pattern] = true;
        }
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return temp;
}
```
