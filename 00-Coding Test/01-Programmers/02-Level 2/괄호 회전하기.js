function solution(s) {
  if (s.length % 2) return 0;
  s = s.split("");
  let stack = [];
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (
        (s[j] === "]" && stack[stack.length - 1] === "[") ||
        (s[j] === ")" && stack[stack.length - 1] === "(") ||
        (s[j] === "}" && stack[stack.length - 1] === "{")
      ) {
        stack.pop();
      } else {
        stack.push(s[j]);
      }
    }
    if (stack.length === 0) result++;
    s.push(s[0]);
    s.shift();
    stack = [];
  }

  return result;
}
