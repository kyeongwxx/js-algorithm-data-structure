function charCount(str) {
  let obj = {};
  for (let char of str) {
    // char가 문자와 숫자에 대해서만 소문자 a에서 z, 혹은 0부터 9에 해당하는지 검사
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // obj[char] 값이 truthy 일 시 || falsy 일 시
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

console.log(charCount("Hello hi"));
