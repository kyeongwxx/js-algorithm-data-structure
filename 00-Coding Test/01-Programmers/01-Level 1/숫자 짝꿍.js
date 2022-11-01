function solution(X, Y) {
  let answer = "";
  // map 객체 생성
  const map = new Map();

  // key: Y[i], value: Y[i]에 해당하는 value 값 +1 / undefined 대신 0
  for (let i = 0; i < Y.length; i++) {
    map.set(Y[i], (map.get(Y[i]) || 0) + 1);
  }

  for (let i = 0; i < X.length; i++) {
    // X[i]를 key로 갖는 요소의 value값이 1 이상이라면
    if (map.get(X[i]) >= 1) {
      // key: X[i], value: X[i]에 해당하는 value 값 -1 / undefined 대신 0
      map.set(X[i], (map.get(X[i]) || 0) - 1);
      answer += X[i];
    }
  }

  if(!answer.length) return "-1"
  if(!+answer) return "0"
  return answer.split("").sort().reverse().join("");
}
