const divCont = document.querySelector('.container');

// Create a button that, when clicked, prompts the user for a number lower than 100
// Use the user input to generate a grid of divs with the given number as the size for the grid

// Select the button element on the page
// add a click event listener to the button
// click prompts the user for a number less than 100
// if the user inputs not a number or a number greater than 100
// alert try again
// else set i variable to 0
// while i is lesser than user input
// append tiles to the div container
//
const sizeButton = document.querySelector('button');
sizeButton.addEventListener('click', getUserInput);

function getUserInput() {
	const userInput = +prompt('Input a number between 1 and 100');
	if (typeof userInput !== 'number') {
		alert('try again');
	} else {
		for (i = 0; i < userInput**2; i++) {
			const tile = document.createElement('div');
			tile.classList.add('tile');
			divCont.appendChild(tile);
		}
		activateGrid();
	}
};

function activateGrid() {
	const grid = document.querySelectorAll('.tile');
	grid.forEach((tile) => {
		tile.addEventListener('mouseover', e => {
			e.target.classList.add('blue');
		});
	});
};
