"use strict";

next:
for (let num = 2; num <= 100; num++) {

  for (let i = 2; i < num; i++) {
    if (num % i === 0) continue next;
  }

  console.log(num);
}