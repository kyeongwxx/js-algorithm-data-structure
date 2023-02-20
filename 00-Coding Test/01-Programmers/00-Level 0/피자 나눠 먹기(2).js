function solution(n) {
  let copy = n;
  let i = 1;

  while (n % 6 !== 0) {
    n = copy * i;
    i++;
  }

  return n / 6;
}
