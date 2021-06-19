//module
const Gameboard = (() => {
  const array = [];
  const board = document.querySelectorAll('#gameboard>.cell');
  const move = (turn) => {
    board.forEach((div) => {
      div.addEventListener('click', () => {
        if (turn === 'x') {
          if (!div.textContent) {
            div.textContent = 'x';
            turn = 'o';
            array.push({position: div.id, value: div.textContent});
          };
        } else {
          if (!div.textContent) {
            div.textContent = 'o';
            turn = 'x';
            array.push({position: div.id, value: div.textContent});
          };
        };
        //TODO: figure out how to check result
        console.log(array);
      });
    });
  };
  return {
    array,
    move
  };
})();

//factory function
const Player = () => {
  //const getName  = () => name;
  const turn = () => console.log('Player first!');
  return { name, turn };
};

Gameboard.move('x');
