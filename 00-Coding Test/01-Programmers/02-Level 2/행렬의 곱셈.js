function solution(arr1, arr2) {
  let answer = [];

  // i : arr1의 행
  for (let i = 0; i < arr1.length; i++) {
    // result : 결과 행렬의 한 행
    let result = [];
    // j : arr2의 열
    for (let j = 0; j < arr2[0].length; j++) {
      // elem : 각 칸의 값
      let elem = 0;
      // k : 각 칸의 값을 구하기 위해 반복해야 하는 수
      for (let k = 0; k < arr1[0].length; k++) {
        elem += arr1[i][k] * arr2[k][j];
      }
      result.push(elem);
    }
    answer.push(result);
  }

  return answer;
}
