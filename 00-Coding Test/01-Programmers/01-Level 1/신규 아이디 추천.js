function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w\-\.]/g, "") // []: 내부 문자중 하나, [^]: 부정, \w: 알파벳, 숫자, 언더스코어, \-: -를 문자로 사용, \.: .을 문자로 사용
    .replace(/[\.]{2,}/g, ".") // {n,}: 앞 문자 n번 이상 반복
    .replace(/^\.|\.$/g, "")   // ^x: x로 문자열 시작, x$: x로 문자열 끝
    .replace(/^$/g, "a")
    .slice(0, 15)
    .replace(/\.$/, "");

  return answer.padEnd(3, answer[answer.length - 1]);
}
