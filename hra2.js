import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

const gameArray = Array.from(document.querySelectorAll('.field__button'));
let currentPlayer = 'circle';
const selectSquare = async (evt) => {
  evt.target.disabled = true;
  if (currentPlayer === 'circle') {
    evt.target.classList.add('field__button--circle');
    currentPlayer = 'cross';
    document.querySelector('.player').src = 'materials/cross.svg';
  } else {
    evt.target.classList.add('field__button--cross');
    currentPlayer = 'circle';
    document.querySelector('.player').src = 'materials/circle.svg';
  }

  const gameArrayFilled = gameArray.map((square) => {
    if (square.classList.contains('field__button--circle')) {
      return 'o';
    } else if (square.classList.contains('field__button--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const winner = findWinner(gameArrayFilled);
  if (winner === 'o' || winner === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner}.`);
      location.reload();
    }, 500);
  } else if (currentPlayer === 'cross') {
    const response = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: gameArrayFilled,
          player: 'x',
        }),
      },
    );
    const data = await response.json();
    const { x, y } = data.position;
    const field = gameArray[x + y * 10];
    field.click();
  }
};

const repeat = document.querySelector('.icon--repeat');
repeat.addEventListener('click', (event) => {
  const confirmation = confirm('Opravdu chcete obnovit hru?');
  if (!confirmation) {
    event.preventDefault();
  }
});

gameArray.forEach((field) => {
  field.addEventListener('click', selectSquare);
});
