function solution(n) {
  let answer = 0;
  let countOneOfNumber = n.toString(2).replaceAll(0, "").length;

  for (let i = n + 1; i <= 1000000; i++) {
    let countOneOfNextNumber = i.toString(2).replaceAll(0, "").length;
    if (countOneOfNumber === countOneOfNextNumber) {
      answer = i;
      break;
    }
  }

  return answer;
}
