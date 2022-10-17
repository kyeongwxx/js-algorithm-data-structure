function solution(n) {
  let count = 0;

  function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  }

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) count++;
  }

  return count;
}
