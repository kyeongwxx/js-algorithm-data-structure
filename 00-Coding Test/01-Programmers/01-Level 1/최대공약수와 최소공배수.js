function solution(n, m) {
  let G; // 최대공약수
  let L; // 최소공배수

  let min = Math.min(m, n);

  for (let i = 0; i <= min; i++) {
    if (n % i === 0 && m % i === 0) {
      G = i;
    }
  }

  L = (n * m) / G;

  return [G, L];
}
