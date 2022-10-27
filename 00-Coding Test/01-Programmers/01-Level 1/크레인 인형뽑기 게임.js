function solution(board, moves) {
  let count = 0;   // 사라진 인형 수
  let picked = []; // stack

  for (let i = 0; i < moves.length; i++) {
    let now = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      // 2차원 배열 내 값(인형)이 존재하고
      if (board[j][now]) {
        // 해당 위치의 값(인형)이 stack의 마지막 인덱스의 값(인형)과 같다면
        if (board[j][now] === picked[picked.length - 1]) {
          // stack 맨 끝에서 pop하고, 사라진 인형 수 +2
          picked.pop();
          count += 2;
        // 해당 위치의 값(인형)이 stack의 마지막 인덱스의 값(인형)과 다르다면
        } else {
          // stack에 push
          picked.push(board[j][now]);
        }
        // 해당 위치 값을 0 대입 후 for문 종료
        board[j][now] = 0;
        break;
      }
    }
  }
  
  return count;
}
