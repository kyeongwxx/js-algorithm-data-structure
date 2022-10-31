function solution(N, coffee_times) {
    // 결과값 산출을 위한 배열 선언
    let answer = [];
  
    // key로 커피 추출 순서, value로 커피 추출 시간을 담는 객체 선언
    let obj = {};
    for (let i = 0; i < N; i++) {
      obj[i] = { orderNum: i + 1, value: coffee_times[i] };
    }
  
    let nowOrderNum = N - 1;
  
    // 두 배열의 길이가 같아질 때까지 while문 반복
    while (answer.length < coffee_times.length) {
      for (let key in obj) {
        // 커피 추출 시간(value)이 0이면 answer 배열에 orderNum을 담고, orderNum과 value 객체의 다음 요소 진행
        if (obj[key].value === 0) {
          answer.push(obj[key].orderNum);
          nowOrderNum++;
          obj[key].orderNum = nowOrderNum + 1;
          obj[key].value = coffee_times[nowOrderNum];
        } else {
          // 커피 추출 시간(value)가 0이 아니라면 -1 반복
          obj[key].value -= 1;
        }
      }
    }
  
    // 결과값 산출
    return answer;
  }
  