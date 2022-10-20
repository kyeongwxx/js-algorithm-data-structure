const bonus = ["S", "D", "T"];
const options = ["*", "#"];

function solution(dartResult) {
  const answer = [];
  let score = "";

  for (let i = 0; i < dartResult.length; i++) {
    if (isNaN(dartResult[i]) === false) {
      score += dartResult[i];
    } else {
      if (bonus.includes(dartResult[i])) {
        score = Number(score);
        if (dartResult[i] === "D") score = score ** 2;
        if (dartResult[i] === "T") score = score ** 3;
      }
      if (score !== "") answer.push(score);
      score = "";

      if (options.includes(dartResult[i])) {
        if (dartResult[i] === "*") {
          answer[answer.length - 1] *= 2;
          if (answer.length > 1) {
            answer[answer.length - 2] *= 2;
          }
        }
        if (dartResult[i] === "#") answer[answer.length - 1] *= -1;
      }
    }
  }
  
  let sum = 0;
  for (let i = 0; i < answer.length; i++) {
    sum += answer[i];
  }

  return sum;
}
