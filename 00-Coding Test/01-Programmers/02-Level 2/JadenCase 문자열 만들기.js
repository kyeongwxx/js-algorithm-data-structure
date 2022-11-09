function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.substr(1))
    .join(" ");
}
