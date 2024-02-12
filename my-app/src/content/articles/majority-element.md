---
layout: ../../layout/MarkdownLayout.astro
id: 165
title: Majority Element
description: The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
date: Feb 12, 2024
tags: [Array Hash Table, Divide And Conquer, Sorting, Counting]
difficulty: Easy
draft: false
---

## Problem

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

### Case 1

```
Input: nums = [3,2,3]
Output: 3
```

### Case 2

```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

### Constraints

```
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
```

### Solution

```typescript
function majorityElement(nums: number[]): number {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
    if (map[nums[i]] > nums.length / 2) return nums[i];
  }
}
```
