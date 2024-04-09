let currentPlayer = 'circle';

const selectSquare = (evt) => {
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
};

const repeat = document.querySelector('.icon--repeat');
repeat.addEventListener('click', (event) => {
  const confirmation = confirm('Opravdu chcete obnovit hru?');
  if (!confirmation) {
    event.preventDefault();
  }
});

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', selectSquare);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', selectSquare);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', selectSquare);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', selectSquare);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', selectSquare);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', selectSquare);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', selectSquare);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', selectSquare);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', selectSquare);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', selectSquare);
