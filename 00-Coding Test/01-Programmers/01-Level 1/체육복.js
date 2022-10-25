function solution(n, lost, reserve) {
    let newLost = lost.filter((el) => !reserve.includes(el)).sort((a, b) => a - b);
    let newReserve = reserve.filter((el) => !lost.includes(el)).sort((a, b) => a - b);
  
    let answer = n - newLost.length;
  
    for (let i = 0; i < newLost.length; i++) {
      if (newReserve.includes(newLost[i] - 1)) {
        answer++;
        newReserve.splice(newReserve.indexOf(newLost[i] - 1), 1);
      } else if (newReserve.includes(newLost[i] + 1)) {
        answer++;
        newReserve.splice(newReserve.indexOf(newLost[i] + 1), 1);
      }
    }
  
    return answer;
  }
  