// Create 16x16 divs and place them inside the container div

// Declare a create div element variable
// Select the container class div in the html
// append the div 256 times to the container

const divCont = document.querySelector('.container');

for (i = 0; i <= 256; i++) {
	const gridDiv = document.createElement('div');
	divCont.appendChild(gridDiv);
};
