function solution(survey, choices) {
  let answer = "";
  let scores = [3, 2, 1, 0, 1, 2, 3];

  let map = new Map([
    ["R", 0],
    ["T", 0],
    ["C", 0],
    ["F", 0],
    ["J", 0],
    ["M", 0],
    ["A", 0],
    ["N", 0],
  ]);

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      map.set(survey[i][0], (map.get(survey[i][0]) || 0) + scores[choices[i] - 1]);
    } else if (choices[i] > 4) {
      map.set(survey[i][1], (map.get(survey[i][1]) || 0) + scores[choices[i] - 1]);
    }
  }

  map.get("R") >= map.get("T") ? answer += "R" : answer += "T"
  map.get("C") >= map.get("F") ? answer += "C" : answer += "F"
  map.get("J") >= map.get("M") ? answer += "J" : answer += "M"
  map.get("A") >= map.get("N") ? answer += "A" : answer += "N"

  return answer;
}
