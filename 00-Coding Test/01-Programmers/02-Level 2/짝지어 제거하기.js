function solution(s) {
  let array = s.split("");
  let stack = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(array[i]);
    }
  }

  return stack.length ? 0 : 1;
}
