---
title: Two Sum
date: 2023-05-24
author: Tom Fan
image: { src: "https://picsum.photos/seed/picsum/1920/1080", alt: "an image" }
description: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
draft: false
category: Array
---

# 1. Two Sum

![image](https://picsum.photos/seed/picsum/1920/1080)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Case 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Case 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Case 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Brute-force algorithms

It uses a nested loop to iterate through each element of the array and check if there is another element in the array that can be added to it to equal the target number.

```typescript
const twoSum = (nums: number[], target: number) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
```

The outer loop starts at the first element of the array and continues until the end of the array is reached. The inner loop starts at the next element of the array and continues until the end of the array is reached. This ensures that each pair of elements is only checked once, and that the second element is always after the first element in the array.

The if statement inside the nested loop checks if the sum of the two elements being currently checked is equal to the target number. If it is, the indices of the two elements are returned in an array.

The time complexity of this function is **O(n^2)**, where n is the length of the input array nums. This is because the function uses two nested loops to examine each pair of elements in the array.

As the size of the input array increases, the number of iterations required by the nested loop increases quadratically, which can make the function very slow for large arrays. Therefore, this algorithm is not the most efficient way to solve the two-sum problem for large input sizes.

## Hash map

The function uses a hash map to keep track of the previously seen numbers in the array and their indices.

```typescript
const twoSum = (nums: number[], target: number) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
};
```

It creates an empty hash map (map) to store the previously seen numbers and their indices.

It loops through each number in the nums array using a for loop.

For each number, it calculates the complement value (complement) by subtracting the current number from the target. The complement value is the value that, when added to the current number, will result in the target value.

It checks if the complement value exists in the hash map (map) using the has method. If it does, that means the current number and the complement value add up to the target value. In this case, it returns an array with the indices of the complement value and the current number.

If the complement value is not in the hash map, it adds the current number and its index to the hash map using the set method.

The time complexity of this function is **O(n)** because it loops through the array once and performs constant-time operations for each element.
