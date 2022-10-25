function solution(lottos, win_nums) {
  let rank = [6, 6, 5, 4, 3, 2, 1];

  let answer = [];
  let zero = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      answer.push(lottos[i]);
    }
    if (lottos[i] === 0) {
      zero += 1;
    }
  }

  return [rank[answer.length + zero], rank[answer.length]];
}
