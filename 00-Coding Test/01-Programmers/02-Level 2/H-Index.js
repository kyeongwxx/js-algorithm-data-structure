function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let stack = [];

  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) stack.push(citations[i]);
  }

  return stack.length;
}
