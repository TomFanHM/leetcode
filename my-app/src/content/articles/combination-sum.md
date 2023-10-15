---
layout: ../../layout/MarkdownLayout.astro
id: 92524ad4
title: Combination Sum
date: May 29, 2023
author: Tom Fan
imageUrl: ../../assets/2.png
description: Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
draft: false
category: Backtracking
---

### Problem

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
frequency
of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

#### Case 1

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

#### Case 2

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

#### Case 3

```
Input: candidates = [2], target = 1
Output: []
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

#### Why is pop() used?

The arr.pop() method is used to backtrack to the previous state and explore other possibilities.

When generating combinations recursively, we add elements to the arr array to generate a new combination and then remove the last element added to arr using the pop() method to backtrack to the previous state. This is because we want to continue exploring other possibilities by considering other elements in the candidates array.

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

For example, suppose we have the candidates array [2, 3, 5] and the target value of 8. When generating the combination [2, 2, 2], we start with an empty arr array and the sum of 0. We add the first element 2 to arr, and the sum becomes 2. We then recursively call backtrack with the updated start index of 0, arr as [2], and the sum of 2.

In the next iteration of the for loop, we consider the second element 2 and add it to arr to get [2, 2]. The sum becomes 4. We then recursively call backtrack with the updated start index of 0, arr as [2, 2], and the sum of 4.

In the next iteration of the for loop, we again consider the element 2 and add it to arr to get [2, 2, 2]. The sum becomes 6. We then recursively call backtrack with the updated start index of 0, arr as [2, 2, 2], and the sum of 6.

At this point, we have explored all possibilities for the 2 element, so we need to backtrack to the previous state and consider other possibilities. We remove the last element from arr using the pop() method, so arr becomes [2, 2]. The sum becomes 4. We can now continue exploring other possibilities by considering the next element in the candidates array.

Using the pop() method, we can efficiently remove the last element from arr and keep exploring other possibilities without having to create a new array. This helps to save memory and improve the performance of the function.
