function solution(denum1, num1, denum2, num2) {
  let son = denum1 * num2 + denum2 * num1;
  let mom = num1 * num2;

  function getG(a, b) {
    while (b > 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  return [son / getG(son, mom), mom / getG(son, mom)];
}
