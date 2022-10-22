function solution(a, b, n) {
  let answer = 0;
  let remainder = 0;
  let receivedBottle = 0;

  const recursive = () => {
    if (n < a) return;

    receivedBottle = parseInt(n / a) * b;
    remainder = n % a;
    n = receivedBottle + remainder;
    answer += receivedBottle;

    recursive(a, b, n);
  };

  recursive();

  return answer;
}
