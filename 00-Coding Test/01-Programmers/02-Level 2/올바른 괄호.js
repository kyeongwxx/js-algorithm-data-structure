function solution(s) {
  if (s[0] === ")") return false;
  if (s[s.length - 1] === "(") return false;
  if (s.length % 2 !== 0) return false;

  let stack = 0;

  for (let i = 0; i < s.length; i++) {
    stack += s[i] === "(" ? 1 : -1;
    if (stack < 0) return false;
  }

  return stack ? false : true;
}
