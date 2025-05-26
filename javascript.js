const container = document.querySelector('.container');
const resizeBtn = document.getElementById('resizeBtn');

function createGrid(size) {
  container.innerHTML = ''; // Clear previous grid

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseenter', () => {
      square.classList.add('hovered');
    });

    container.appendChild(square);
  }
}

resizeBtn.addEventListener('click', () => {
  let newSize = prompt("Enter grid size (max 100):");
  newSize = parseInt(newSize);

  if (Number.isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});

// Initial 16x16 grid
createGrid(16);