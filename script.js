const Gameboard = (() => {
  let array = ['', '', '', '', '', '', '', '', ''];
  let winner;
  const board = document.querySelectorAll('#gameboard>.cell');
  const result = document.querySelector('#result');
  const play = (turn) => {
    board.forEach(div => {
      div.addEventListener('click', () => {
        if (turn === 'x') {
          if (!div.textContent) {
            div.textContent = 'x';
            turn = 'o';
            array.splice(div.id, 1, div.textContent);
          };
        } else {
          if (!div.textContent) {
            div.textContent = 'o';
            turn = 'x';
            array.splice(div.id, 1, div.textContent);
          };
        };
        if (array.every(el => el !== '')) {
          result.textContent = "It's a tie!";
          return clearBoard();
        };
        if (checkResult(array)) {
          result.textContent = winner + ' wins!';
          turn = 'x';
          return clearBoard();
        };
      });
    });
  };
  const checkResult = (array) => {
    const winningCombinations = [
      array.slice(0, 3),
      array.slice(3, 6),
      array.slice(6),
      [array[0], array[3], array[6]],
      [array[1], array[4], array[7]],
      [array[2], array[5], array[8]],
      [array[0], array[4], array[8]],
      [array[2], array[4], array[6]]
      ];
    return winningCombinations.some(combination => {
      if (combination.every(el => el !== '') &&
          combination.every(el => el === combination[0])) {
        winner = players[combination[0]];
        return true;
      };
    });
  };
  const clearBoard = () => {
    array = ['', '', '', '', '', '', '', '', ''];
    board.forEach(div => {div.textContent = ''})
  }
  return {
    play
  };
})();

const player1 = document.querySelector('#nameInput>#x');
const player2 = document.querySelector('#nameInput>#o');
const players = {};
const saveName = () => {
  players[player1.id] = player1.value;
  players[player2.id] = player2.value;
};

saveName();
Gameboard.play('x');
