function solution(A, B) {
  let answer = 0;
  let copyA = [...A].sort((a, b) => b - a);
  let copyB = [...B].sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) {
    answer += copyA[copyA.length - 1] * copyB[copyB.length - 1]
    copyA.pop();
    copyB.pop();
  }

  return answer;
}
