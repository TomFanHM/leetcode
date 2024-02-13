---
layout: ../../layout/MarkdownLayout.astro
id: 4
title: Median of Two Sorted Arrays
description: Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
date: Feb 12, 2024
tags: [Array, Binary Search, Divide And Conquer]
difficulty: Hard
draft: false
---

## Problem

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

### Case 1

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
```

### Case 2

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
```

### Constraints

```
nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
```

## Solution

This beginner solution directly merges the two arrays and then finds the median. It's straightforward but does not meet the optimal time complexity requirement.

```typescript
function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const mid = Math.floor(merged.length / 2);

  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}
```

```typescript
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let stack = [];
  while (nums1.length > 0 && nums2.length > 0) {
    if (nums1[0] < nums2[0]) {
      stack.push(nums1.splice(0, 1));
    } else {
      stack.push(nums2.splice(0, 1));
    }
  }
  stack = [...stack, ...nums1, ...nums2];
  if (stack.length % 2 === 0) {
    let half = (stack.length - 1) / 2;
    let a = Number(stack[Math.floor(half)]);
    let b = Number(stack[Math.ceil(half)]);
    return (a + b) / 2;
  }
  return stack[(stack.length - 1) / 2];
}
```
