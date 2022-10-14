function solution(sizes) {
  let w = [];
  let h = [];

  for (let i = 0; i < sizes.length; i++) {
    w.push(Math.max(sizes[i][0], sizes[i][1]));
    h.push(Math.min(sizes[i][0], sizes[i][1]));
  }

  return Math.max(...w) * Math.max(...h);
}
