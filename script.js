const gridContainer = document.getElementById('grid-container');
const clearButton = document.getElementById('clear-button');
const gridSize = prompt('Elije el nro de casillas por columnas');

function createGrid(size) {
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black'
        })
        gridContainer.appendChild(gridItem);
    }
}

function clearGrid(){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item =>{
        item.style.backgroundColor= 'white';
    }
    );
}

createGrid(gridSize);

clearButton.addEventListener('click', clearGrid);
