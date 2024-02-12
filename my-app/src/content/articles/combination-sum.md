---
layout: ../../layout/MarkdownLayout.astro
id: 39
title: Combination Sum
description: Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
date: May 29, 2023
tags: [Array, Backtracking]
difficulty: Medium
draft: false
---

## Problem

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

### Case 1

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

### Case 2

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

### Case 3

```
Input: candidates = [2], target = 1
Output: []
```

### Constraints

```
1 <= candidates.length <= 30
2 <= candidates[i] <= 40
All elements of candidates are distinct.
1 <= target <= 40
```

### Solution

- Backtracking algorithm

```typescript
function combinationSum(candidates: number[], target: number): number[][] {
  const stack = [];
  candidates.sort((a, b) => a - b);

  function backtrack(start: number, arr: number[], sum: number) {
    if (sum === target) {
      stack.push([...arr]);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      const newSum = sum + candidates[i];
      if (newSum > target) break;
      arr.push(candidates[i]);
      backtrack(i, arr, newSum);
      arr.pop();
    }
  }

  backtrack(0, [], 0);
  return stack;
}
```

This function first creates an empty stack array to store the combinations.
The candidates array is sorted in ascending order using the sort function to optimize the backtracking algorithm.

The backtrack function is defined to perform the recursive backtracking algorithm with three parameters: start, arr, and sum. start represents the index of the candidates array from where the current iteration should start. arr is an array that stores the current combination of numbers, and sum is the current sum of the numbers in arr.

If sum equals target, the current combination in arr is pushed to the stack array, and the function returns.

Otherwise, a for loop is used to iterate through the candidates array starting from the start index. For each element, the new sum is calculated by adding the current element with the sum.

If the new sum is greater than the target, the loop is broken as it is impossible to form a valid combination.

Otherwise, the current element is added to the arr, and the backtrack function is called recursively with the updated start, arr, and newSum values.

After the recursive call returns, the last element is removed from arr using the pop function to backtrack to the previous state and explore other possibilities.
