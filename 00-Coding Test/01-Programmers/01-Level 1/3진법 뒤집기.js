function solution(n) {
  let ternary = n.toString(3);
  let reverse = ternary.split("").reverse().join("");
  let decimal = parseInt(reverse, 3);

  return decimal;
}
