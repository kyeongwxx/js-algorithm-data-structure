function solution(id_list, report, k) {
  let answer = [];

  let splitReport = [...new Set(report)].map((el) => el.split(" "));

  let reportedIdMap = new Map();
  let receivedMailMap = new Map();

  for (let i = 0; i < splitReport.length; i++) {
    reportedIdMap.set(
      splitReport[i][1],
      (reportedIdMap.get(splitReport[i][1]) || 0) + 1
    );
  }

  for (let i = 0; i < splitReport.length; i++) {
    if (reportedIdMap.get(splitReport[i][1]) >= k) {
      receivedMailMap.set(
        splitReport[i][0],
        (receivedMailMap.get(splitReport[i][0]) || 0) + 1
      );
    }
  }

  answer = id_list.map((el) => receivedMailMap.get(el) || 0);

  return answer;
}
