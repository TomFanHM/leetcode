---
title: Subsets
date: 2023-05-26
author: Tom Fan
image: { src: "https://picsum.photos/id/22/1920/1080", alt: "an image" }
description: Given an integer array nums of unique elements, return all possible subsets (the power set).
draft: false
category: Array
---

# 78. Subsets
![image](https://picsum.photos/id/22/1920/1080)

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

### Case 1
```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

### Case 2
```
Input: nums = [0]
Output: [[],[0]]
```

## Subsets
The solution is based on the idea that we can generate all subsets by iteratively adding each element of the array.
```typescript
function subsets(nums: number[]): number[][] {
    let stack = [[]]
    for (let i = 0; i < nums.length; i++) {
        const newSets = stack.map((el) => [...el, nums[i]])
        stack = stack.concat(newSets)
    }
    return stack
};
```
We start with an empty subset and then add each element of the array to the existing subsets.

For example, if the input array is [1,2,3], we start with an empty subset and then add 1 to it, resulting in [1]. Then we add 2 to the empty subset, resulting in [2]. We also add 2 to the subset [1], resulting in [1,2]. We continue this process until we have added all elements of the array.

To avoid duplicate subsets, we use a set data structure to store the subsets.

