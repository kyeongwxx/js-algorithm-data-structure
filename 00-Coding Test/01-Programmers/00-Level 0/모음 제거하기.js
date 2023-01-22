function solution(my_string) {
  my_string = my_string.split('');
  let answer = [];

  for (let i = 0; i < my_string.length; i++) {
    if (
      my_string[i] === 'i' ||
      my_string[i] === 'e' ||
      my_string[i] === 'o' ||
      my_string[i] === 'u' ||
      my_string[i] === 'a'
    ) {
      continue;
    }
    answer.push(my_string[i]);
  }

  return answer.join('');
}
