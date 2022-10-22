function solution(a, b, n) {
  let answer = 0;
  let leftBottle = 0;
  let receivedBottle = 0;

  const recursive = () => {
    if (n < a) return;

    receivedBottle = parseInt(n / a) * b;
    leftBottle = n % a;
    n = receivedBottle + leftBottle;
    answer += receivedBottle;

    recursive(a, b, n);
  };

  recursive();

  return answer;
}
