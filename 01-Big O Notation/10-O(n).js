// O(n)
const logAtLeast5 = (n) => {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

console.log(logAtLeast5(7));
