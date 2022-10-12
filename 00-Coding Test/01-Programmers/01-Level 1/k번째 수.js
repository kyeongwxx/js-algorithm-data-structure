function solution(array, commands) {
  let answer = [];
  let arr = [];
  let i;
  let j;
  let k;

  for (let a = 0; a < commands.length; a++) {
    i = commands[a][0];
    j = commands[a][1];
    k = commands[a][2];
    for (let n = i; n <= j; n++) {
      arr.push(array[n - 1]);
    }
    arr.sort((a, b) => a - b);
    answer.push(arr[k - 1]);
    arr = [];
  }
  return answer;
}
