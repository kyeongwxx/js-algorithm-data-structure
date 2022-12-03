function solution(num_list) {
  let even = num_list.filter((el) => el % 2 === 0).length;
  let odd = num_list.filter((el) => el % 2 !== 0).length;

  return [even, odd];
}
