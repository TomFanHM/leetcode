---
layout: ../../layout/MarkdownLayout.astro
id: 2
title: Add Two Numbers
description: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
date: Jul 22, 2023
tags: [Linked List, Math, Recursion]
difficulty: Medium
draft: false
---

## Problem

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Case 1

```
Input: l1 = [2, 4, 3], l2 = [5, 6, 4];
Output: [7, 0, 8];
```

### Case 2

```
Input: l1 = [0], l2 = [0];
Output: [0];
```

### Case 3

```
Input: l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9];
Output: [8, 9, 9, 9, 0, 0, 0, 1];
```

### Constraints

```
The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
```

### ListNode Class

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

### Solution

```typescript
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0;
  let node = l1;
  let prev = null;

  while (l1 && l2) {
    let sum = l1.val + l2.val + carry;
    carry = sum >= 10 ? 1 : 0;
    l1.val = sum % 10;
    prev = l1;
    l1 = l1.next;
    l2 = l2.next;
  }

  if (l2) {
    prev.next = l2;
    l1 = l2;
  }

  while (carry && l1) {
    let sum = l1.val + carry;
    carry = sum >= 10 ? 1 : 0;
    l1.val = sum % 10;
    prev = l1;
    l1 = l1.next;
  }

  if (carry) {
    prev.next = new ListNode(1);
  }

  return node;
}
```
