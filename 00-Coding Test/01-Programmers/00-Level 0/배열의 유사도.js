function solution(s1, s2) {
  let count = 0;
  let longer;
  let shorter;

  if (s1.length >= s2.length) {
    longer = s1;
    shorter = s2;
  }
  if (s2.length >= s1.length) {
    longer = s2;
    shorter = s1;
  }

  for (let i = 0; i < longer.length; i++) {
    if (longer.includes(shorter[i])) count++;
  }

  return count;
}

console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']));
