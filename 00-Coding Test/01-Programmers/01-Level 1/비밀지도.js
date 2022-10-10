function solution(n, arr1, arr2) {
  let map1 = [];
  let map2 = [];
  let pwd = "";
  let result = [];

  for (let i = 0; i < n; i++) {
    map1.push(arr1[i].toString(2).padStart(n, "0"));
    map2.push(arr2[i].toString(2).padStart(n, "0"));
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === "1" || map2[i][j] === "1") {
        pwd += "#";
      } else if (map1[i][j] === "0" && map2[i][j] === "0") {
        pwd += " ";
      }
    }
    result.push(pwd);
    pwd = "";
  }

  return result;
}
