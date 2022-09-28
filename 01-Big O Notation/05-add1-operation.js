const addUpTo = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};

// Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2
// 1 assignment(total = 0), 1 assignment(i = 1)
// n additions, n assignments(+=), n comparisons(<=), n addition and n assignments(++)