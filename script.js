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
				const tile = document.createElement('div');
				tile.classList.add('tile');
				column.appendChild(tile);
			}
		});
	activateGrid();
	}
};

function activateGrid() {
	const grid = document.querySelectorAll('.tile');
	grid.forEach((tile) => {
		tile.addEventListener('mouseover', e => {
			if (e.target.style.backgroundColor === '') {
			e.target.style.cssText = `background-color: rgb(${getRandomInt(1, 255)}, ${getRandomInt(1, 255)}, ${getRandomInt(1, 255)});`;
			} else {
				const color = e.target.style.backgroundColor;
				const colorNew = color.slice(4, -1).split(',').map(reduce10);
				e.target.style.cssText = `background-color: rgb(${colorNew})`;
			}
		});
	});
};

function reduce10(value) {
	return value - (value * 0.1);
};

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
