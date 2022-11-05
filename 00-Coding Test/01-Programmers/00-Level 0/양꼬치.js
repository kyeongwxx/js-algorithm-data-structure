function solution(n, k) {
  let answer = 0;
  k = k - Math.floor(n / 10);

  let lamb = 12000 * n;
  let beverage = 2000 * k;

  answer = lamb + beverage;

  return answer;
}
