function solution(a, b, c, d, e, f) {
    // 합성이 이루어질 수 없는 경우 예외 처리
    if (a < 2 && b < 2 && c < 2) return false;
  
    // return값으로 산출할 answer 변수 초기값 선언(true)
    let answer = true;
  
    // 합성을 위해 필요한 구슬의 수를 구하기 위해 세 가지 케이스를 선언
    // 합성 전 구슬의 개수 - 합성 후 구슬의 개수
    let case1 = a - d;
    let case2 = b - e;
    let case3 = c - f;
  
    // 케이스가 0 포함 양수일 경우 나누기 2 진행, 케이스가 음수일 경우 미진행
    if (case1 >= 0) case1 = Math.floor(case1 / 2);
    if (case2 >= 0) case2 = Math.floor(case2 / 2);
    if (case3 >= 0) case3 = Math.floor(case3 / 2);
  
    // 각 케이스의 합이 음수일 경우 합성을 위해 필요한 구슬이 부족한 것으로 판별(false)
    if (case1 + case2 + case3 < 0) answer = false;
  
    // return값 산출
    return answer;
  }
  