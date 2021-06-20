//module
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
        if (checkResult(array)) {
          console.log(winner);
          result.textContent = winner + ' wins!';
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
        winner = combination[0];
        //console.log(winningCombinations.indexOf(combination));
        //TODO: change text color of winning combination on the board
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

//factory function
const Player = () => {
  //TODO: write function choosing player
  const turn = () => console.log('Player first!');
  return { turn };
};

//module Computer
const Computer = (() => {
  const move = 
  return { move };
})();

Gameboard.play('x');
