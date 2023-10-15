---
layout: ../../layout/MarkdownLayout.astro
id: 7495936d
title: Add Two Numbers
date: Jul 22, 2023
author: Tom Fan
imageUrl: ../../assets/1.png
description: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
draft: false
category: Linked List
---

### Problem

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

- The number of nodes in each linked list is in the range [1, 100].
- 0 <= Node.val <= 9
- It is guaranteed that the list represents a number that does not have leading zeros.

```typescript
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
```

#### Case 1

```
Input: l1 = [2, 4, 3], l2 = [5, 6, 4];
Output: [7, 0, 8];
```

#### Case 2

```
Input: l1 = [0], l2 = [0];
Output: [0];
```

#### Case 3

```
Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9];
Output: [8, 9, 9, 9, 0, 0, 0, 1];
```

### Solution

This problem is asking us to add two numbers, represented as linked lists where each node contains a single digit in reverse order. We can add the numbers digit by digit, keeping track of any carryover as we go. We can start with the least significant digits (i.e. the digits in the first position) and work our way up.

We can create a new linked list to store the result, and traverse the input linked lists simultaneously, adding the corresponding digits and any carryover. If the sum is greater than 9, we need to carry over the 1 to the next digit. Once we've added all the digits, we need to check if there is any carryover from the last digit, and add that to the result if necessary.

```typescript
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const node = new ListNode(0);
  let loc = node;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = carry;
    carry = 0; // Reset
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    if (sum > 9) {
      sum = sum % 10;
      carry++;
    }

    loc.val = sum;
    if (l1 || l2 || carry) {
      loc.next = new ListNode(0);
      loc = loc.next;
    }
  }
  return node;
}
```
