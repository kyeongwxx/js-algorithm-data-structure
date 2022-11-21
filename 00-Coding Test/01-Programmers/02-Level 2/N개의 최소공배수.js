function solution(arr) {
  function getG(a, b) {
    while (b > 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function getL(a, b) {
    return (a * b) / getG(a, b);
  }

  return arr.reduce((arr, cur) => getL(arr, cur), 1);
}
