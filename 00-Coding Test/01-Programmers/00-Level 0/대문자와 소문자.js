function solution(my_string) {
  const alphabetExp = /[a-z]/g;
  my_string = my_string.split('');

  return my_string
    .map((v) => (v.match(alphabetExp) ? v.toUpperCase() : v.toLowerCase()))
    .join('');
}
