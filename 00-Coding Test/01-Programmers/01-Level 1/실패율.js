function solution(N, stages) {
  let obj = {};
  let copy = stages.slice();

  for (let i = 1; i <= N; i++) {
    let failed = stages.filter((v) => v === i).length;
    obj[i] = failed / copy.length;
    copy.length -= failed;
  }

  let objKeysSorted = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);

  return objKeysSorted.map((v) => +v);
}
