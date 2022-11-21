function solution(n, words) {
  let answer = [words[0]];

  for (let i = 1; i < words.length; i++) {
    if (
      !answer.includes(words[i]) &&
      answer[answer.length - 1].split("").pop() === words[i][0]
    ) {
      answer.push(words[i]);
    } else {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }

  return [0, 0];
}
