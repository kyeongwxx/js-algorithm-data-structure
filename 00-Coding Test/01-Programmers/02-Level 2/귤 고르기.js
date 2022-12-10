function solution(k, tangerine) {
  let map = new Map();
  let arr = [];
  let count = 0;
  let i = 0;

  for (let i = 0; i < tangerine.length; i++) {
    map.set(tangerine[i], (map.get(tangerine[i]) || 0) + 1);
  }

  arr = [...map.values()].sort((a, b) => b - a);

  while (k > 0) {
    count++;
    k = k - arr[i];
    i++;
  }

  return count;
}
