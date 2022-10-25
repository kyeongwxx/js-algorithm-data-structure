const [leftNumbers, rightNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
];

function solution(numbers, hand) {
  const current = {
    left: 10,
    right: 12,
  };

  const answer = numbers.reduce((acc, cur) => {
    let [useFinger, target, number] = ["", "", 0];

    if (leftNumbers.includes(cur)) {
      [useFinger, target, number] = ["L", "left", cur];
    } else if (rightNumbers.includes(cur)) {
      [useFinger, target, number] = ["R", "right", cur];
    } else {
      const fingers = Object.entries(current).reduce((acc2, cur2) => {
        const targetHand = cur2[0];
        cur = cur === 0 ? 11 : cur;
        let location = Math.abs(cur - cur2[1]);

        if (location > 2) {
          location = Math.trunc(location / 3) + (location % 3);
        }

        acc2[targetHand] = location;
        return acc2;
      }, {});
      if (fingers["left"] === fingers["right"]) {
        [useFinger, target, number] = [hand === "left" ? "L" : "R", hand, cur];
      } else if (fingers["left"] > fingers["right"]) {
        [useFinger, target, number] = ["R", "right", cur];
      } else {
        [useFinger, target, number] = ["L", "left", cur];
      }
    }
    current[target] = number;

    return acc + useFinger;
  }, "");

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))
