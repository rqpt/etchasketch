const divCont = document.querySelector('.container');

const sizeButton = document.querySelector('button');
sizeButton.addEventListener('click', buildGrid);

function buildGrid() {
	divCont.textContent = '';
	const userInput = +prompt('Input a number from 1 to 100');
	if ((typeof userInput !== 'number') || (userInput > 100)){
		alert('Try Again');
	} else {
		for (i = 0; i < userInput; i++) {
			const column = document.createElement('div');
			column.classList.add('column');
			divCont.appendChild(column);
		}
		const columns = document.querySelectorAll('.column');
		columns.forEach((column) => {
			for (i = 0; i < userInput; i++) {
				const row = document.createElement('div');
				row.classList.add('row');
				column.appendChild(row);
			}
		});
	activateGrid();
	}
};

function activateGrid() {
	const grid = document.querySelectorAll('.row', '.column');
	grid.forEach((tile) => {
		tile.addEventListener('mouseover', e => {
			e.target.style.cssText = `background-color: rgb(${getRandomInt(1, 255)}, ${getRandomInt(1, 255)}, ${getRandomInt(1, 255)});`;
		});
	});
};

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
