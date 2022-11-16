function solution(brown, yellow) {
  let answer = [];
  let sum = brown + yellow;

  for (let height = 3; height <= sum; height++) {
    let width = sum / height;
    if (Number.isInteger(width) && width >= height && (width - 2) * (height - 2) === yellow) {
      answer.push(width);
      answer.push(height);
      break;
    }
  }

  return answer
}
