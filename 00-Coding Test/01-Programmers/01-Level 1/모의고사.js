function solution(answers) {
  let answer = [];

  let method1 = [1, 2, 3, 4, 5];
  let method2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let method3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score1 = answers.filter((v, i) => v === method1[i % method1.length]).length;
  let score2 = answers.filter((v, i) => v === method2[i % method2.length]).length;
  let score3 = answers.filter((v, i) => v === method3[i % method3.length]).length;

  let max = Math.max(score1, score2, score3);

  if (max === score1) answer.push(1);
  if (max === score2) answer.push(2);
  if (max === score3) answer.push(3);

  return answer;
}
