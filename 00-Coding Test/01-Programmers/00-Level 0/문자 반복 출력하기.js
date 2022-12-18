function solution(my_string, n) {
  let result = [];

  my_string.split('').forEach((el) => {
    result.push(el.repeat(n));
  });

  return result.join('');
}
