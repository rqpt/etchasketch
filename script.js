const divCont = document.querySelector('.container');

for (i = 0; i < 256; i++) {
	const tile = document.createElement('div');
	tile.classList.add('tile');
	divCont.appendChild(tile);
};

// When the mouse passes over any tiles, their background should change to a random color.
//
// Add a hover eventlistener to all of the divs inside the container
// if the background color is white, change it to a random color
// if the background color is not white, add 10% black.
//
const grid = document.querySelectorAll('.tile');
grid.forEach((tile) => {
	tile.addEventListener('mouseover', e => {
		e.target.classList.add('blue');
	});
});
