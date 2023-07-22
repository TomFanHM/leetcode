---
title: Add Two Numbers
date: 2023-07-22
author: Tom Fan
image: { src: "https://lh3.googleusercontent.com/pw/AIL4fc--cnLSqjwPm6BaSjLode9uMnGAy5uUTEU5JLbdvDaqGb6DUZUgvB8V6OqYybd46pUefKya42ZwviZDPDj3EgLZ52YUW8Wkq8GspWSGo5XH7TkTDjfWhsFgERbvlr_zxDctlXnhILkKBNoAS16efixLXWbT8_6e-Ccun3K-aFW-Ca-iTynagw149fK_iJu3cvfwKOg94AyERJz3t1XvU5034y9ZEMhbjjJf4RyzmZmfi-Zbi81qagvN5XGkearDA2usLg_QggDZuuuQTvQ82qTwaX1YGbl-eDuvTeCh9HAHoXMbJql9YB6x2MTz6AU3NG8cDlAtROGdHLuOKCTWwKvyq8z93w8AviodHwnNitB1z0kndqDqTOyNeCXZ0w2e1gpUPd0WQjv1AdoALafkHIJYuUXNZILWbmCdXbG7Pm6Isz_2k5Pe-KQdNF4RhlPTt--BMA0OwRjF8dRY9gr7yaYzs1KJj0ETSkbRwzBrTeYGIXsT6DQNTUa8qyjUCuxb9VlPwIKkPAdFAsWSQ_81ZnIdf1oOZgT_PYd6dAG3EmKkOIJlfElUIfxgO2vzU4a3TWnSkBYWXZwisXZ52lyEnnpiw1nT36Dc75rtpqrBcL94FvgDj_TsWS8P1GnSAOa5Cn10sbU8puyZ1OJP1vwLq4pO1HQPhltQ-EYF7kpAetjJNPeKtpd2JPetiHY1dhTlYTm8FMeQ1znaUhp4DB7iAlg-5fpJxQ8IKCBI9xuyiK5Cw50ocnkOilCB-XsFhI0JzJjyZuoqoe3JzWSlqOMvw3UI2svJmkqz81o9ncFxp5F7fr5FUCMYEJhbwdpSf542QVovN6UWUqlOqwtIMtJS1_bUhgtCSc2IBs5RtlvFg0y4Nml3AkDqFUqXYzrrAYGPAacZAkHP7HTLH1A9GgHaOp8eo4eJL5YDmArGLsNIJcJXpCvQcUz-14V9aw=w673-h374-s-no?authuser=0", alt: "an image" }
description: You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
draft: false
category: Linked List
---

# 2. Add Two Numbers

![image](https://lh3.googleusercontent.com/pw/AIL4fc--cnLSqjwPm6BaSjLode9uMnGAy5uUTEU5JLbdvDaqGb6DUZUgvB8V6OqYybd46pUefKya42ZwviZDPDj3EgLZ52YUW8Wkq8GspWSGo5XH7TkTDjfWhsFgERbvlr_zxDctlXnhILkKBNoAS16efixLXWbT8_6e-Ccun3K-aFW-Ca-iTynagw149fK_iJu3cvfwKOg94AyERJz3t1XvU5034y9ZEMhbjjJf4RyzmZmfi-Zbi81qagvN5XGkearDA2usLg_QggDZuuuQTvQ82qTwaX1YGbl-eDuvTeCh9HAHoXMbJql9YB6x2MTz6AU3NG8cDlAtROGdHLuOKCTWwKvyq8z93w8AviodHwnNitB1z0kndqDqTOyNeCXZ0w2e1gpUPd0WQjv1AdoALafkHIJYuUXNZILWbmCdXbG7Pm6Isz_2k5Pe-KQdNF4RhlPTt--BMA0OwRjF8dRY9gr7yaYzs1KJj0ETSkbRwzBrTeYGIXsT6DQNTUa8qyjUCuxb9VlPwIKkPAdFAsWSQ_81ZnIdf1oOZgT_PYd6dAG3EmKkOIJlfElUIfxgO2vzU4a3TWnSkBYWXZwisXZ52lyEnnpiw1nT36Dc75rtpqrBcL94FvgDj_TsWS8P1GnSAOa5Cn10sbU8puyZ1OJP1vwLq4pO1HQPhltQ-EYF7kpAetjJNPeKtpd2JPetiHY1dhTlYTm8FMeQ1znaUhp4DB7iAlg-5fpJxQ8IKCBI9xuyiK5Cw50ocnkOilCB-XsFhI0JzJjyZuoqoe3JzWSlqOMvw3UI2svJmkqz81o9ncFxp5F7fr5FUCMYEJhbwdpSf542QVovN6UWUqlOqwtIMtJS1_bUhgtCSc2IBs5RtlvFg0y4Nml3AkDqFUqXYzrrAYGPAacZAkHP7HTLH1A9GgHaOp8eo4eJL5YDmArGLsNIJcJXpCvQcUz-14V9aw=w673-h374-s-no?authuser=0)

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

### Case 1

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
```

### Case 2

```
Input: l1 = [0], l2 = [0]
Output: [0]
```

### Case 3

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
```

## Add Two Numbers

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
