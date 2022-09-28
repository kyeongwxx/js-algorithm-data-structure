// f(n) could be linear. f(n) = n
const countUpAndDown = (n) => {
  console.log("Going Up!");
  // O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("At the top! Going down...");
  // O(n)
  for (let i = n - 1; i >= 0; i--) {
    console.log(i);
  }
  console.log("Back down. Bye!");
};

console.log(countUpAndDown(10));
