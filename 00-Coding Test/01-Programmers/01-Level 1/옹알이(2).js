function solution(babbling) {
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (
      babbling[i].includes("ayaaya") ||
      babbling[i].includes("yeye") ||
      babbling[i].includes("woowoo") ||
      babbling[i].includes("mama")
    )
      continue;

    babbling[i] = babbling[i].replaceAll("aya", " ");
    babbling[i] = babbling[i].replaceAll("ye", " ");
    babbling[i] = babbling[i].replaceAll("woo", " ");
    babbling[i] = babbling[i].replaceAll("ma", " ");

    if ([...babbling[i]].every((el) => el === " ")) answer++;
  }

  return answer;
}
