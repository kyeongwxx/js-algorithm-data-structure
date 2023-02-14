function solution(numbers, direction) {
  let answer = [];

  if (direction === 'right') {
    answer = [numbers[numbers.length - 1], ...numbers];
    answer.pop();
  }

  if (direction === 'left') {
    answer = [...numbers, numbers[0]];
    answer.shift();
  }

  return answer;
}
