function solution(hp) {
  let sum = 0;

  let answer1 = parseInt(hp / 5);
  let answer2 = parseInt((hp % 5) / 3);
  let answer3 = (hp % 5) % 3;

  sum = answer1 + answer2 + answer3;

  return sum;
}
