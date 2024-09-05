// let arr = [`h`,`o`,`l`,`l`,`o`];
// let char = 'l';
// function check() {
//     let fIndex = arr.indexOf(char);
//     let lIndex = arr.lastIndexOf(char);
//     return [fIndex, lIndex];
// }
// console.log(check(arr, char));  
//###############################################
// function checkWinner(board) {
//     for (let i = 0; i < 3; i++) {
//       if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
//         return board[i][0]; 
//       }
//       if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
//         return board[0][i]; 
//       }
//     }

//     if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
//       return board[0][0];
//     }
//     if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
//       return board[0][2]; 
//     }
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         if (board[i][j] === '') {
//           return 'no winner';
//         }
//       }
//     }
//     return 'draw';
//   }
//   let board = [
//     ['x', 'o', 'x'],
//     ['o', 'x', 'o'],
//     ['o', 'x', 'x']
//   ];
  
//   console.log(checkWinner(board));  
//###################################################################################
function canSum(arr, target) { 
    for (let start = 0; start < arr.length; start++) {
      let sum = 0;
      for (let end = start; end < arr.length; end++) {
        sum += arr[end];
        if (sum === target) {
          return true;
        }
      }
    }
    return false;
  }
  let arr =  [1, 2, 3, 4, 5] ;
  let target = 7;
  console.log(canSum(arr, target)); 
  