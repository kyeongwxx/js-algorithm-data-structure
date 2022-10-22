function solution(participant, completion) {
  let answer = "";

  participant.sort((a, b) => (b > a ? -1 : 1));
  completion.sort((a, b) => (b > a ? -1 : 1));

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      break;
    }
  }

  return answer;
}
