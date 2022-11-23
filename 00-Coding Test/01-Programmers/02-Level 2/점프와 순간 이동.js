function solution(n) {
  let answer = 0;

  while(n) {
    if(n % 2 !== 0) {
        n = n - 1
        answer++
    } else {
        n = n / 2
    }
  }

  return answer;
}

