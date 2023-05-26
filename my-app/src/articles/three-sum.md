---
title: 3Sum
date: 2023-05-25
author: Tom Fan
image: { src: "https://picsum.photos/id/16/1920/1080", alt: "an image" }
description: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
draft: false
category: Two pointers
---

# 15. 3Sum

![image](https://picsum.photos/id/16/1920/1080)

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

##  Two-pointer
It involves using two pointers to find all unique triplets within the array that add up to zero.
```typescript
function threeSum(nums: number[]): number[][] {
    const stack = []
    const sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < sorted.length; i++) {
        const current = nums[i]
        let left = i + 1
        let right = sorted.length - 1 //last index
        while (left < right) {
            const leftValue = nums[left]
            const rightValue = nums[right]
            if (leftValue + rightValue + current === 0) {
                left++
                if (hasNoDuplicate(stack, [current, leftValue, rightValue]))
                    stack.push([current, leftValue, rightValue])
            } else if (leftValue + rightValue + current > 0) {
                right--
            } else if (leftValue + rightValue + current < 0) {
                left++
            }
        }
    }
    return stack
};

function hasNoDuplicate(arr: number[][], target: number[]) {
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i]
        if (current[0] === target[0] && current[1] === target[1] && current[2] === target[2]) return false
    }
    return true
}
```
The function first creates an empty array called stack that will hold the unique triplets.

It then sorts the input array in ascending order using the sort method with a callback function that subtracts b from a.

The function then iterates through each element in the sorted input array using a for loop.

For each element, the function creates two pointers called left and right that point to the next and last indices in the sorted input array, respectively.

The function then enters a while loop that continues as long as left is less than right.

Within the while loop, the function checks if the sum of the current element, the element at left, and the element at right equals zero.

If the sum is zero, the function increments left, and checks if the triplet is unique using the hasNoDuplicate function before pushing it onto the stack array.

If the sum is greater than zero, the function decrements right.

If the sum is less than zero,the function increments left.

The function then returns the stack array, which contains all the unique triplets that add up to zero within the input array.

The hasNoDuplicate function is used to check if a triplet already exists in the stack array to avoid adding duplicates.

This function is an efficient solution to the three-sum problem that runs in O(n^2) time complexity.