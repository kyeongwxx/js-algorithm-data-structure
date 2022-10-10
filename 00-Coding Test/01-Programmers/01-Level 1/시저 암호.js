function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";

  let index = 0;
  let result = "";

  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
      continue;
    }

    let upperOrLower = upper.includes(s[i]) ? upper : lower;
    index = upperOrLower.indexOf(s[i]) + n;

    if (index >= upperOrLower.length) {
      index -= upperOrLower.length;
    }

    result += upperOrLower[index];
  }
  return result;
}
