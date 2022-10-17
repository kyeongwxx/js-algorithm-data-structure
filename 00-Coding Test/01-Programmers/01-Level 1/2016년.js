function solution(a, b) {
  let date = new Date();
  let weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  date.setFullYear(2016, a - 1, b);

  return weekdays[date.getDay()];
}
