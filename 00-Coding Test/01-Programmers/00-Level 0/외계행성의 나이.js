function solution(age) {
  const obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
  };

  let answer = '';

  for (let i = 0; i < String(age).length; i++) {
    answer += obj[String(age)[i]];
  }

  return answer;
}
