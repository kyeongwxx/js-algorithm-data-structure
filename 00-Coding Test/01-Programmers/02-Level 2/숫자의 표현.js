function solution(n) {
    let answer = 0;

    // 숫자 n을 연속된 자연수의 합으로 표현하는 방법의 수는
    // n의 홀수인 약수의 수
    for (let i = 0; i <= n; i++) {
        if(n % i === 0 && i % 2 !== 0) answer++
    }

    return answer;
}
