// The code for the button has to be in a separate file, because it has to be loaded before the DOM button is rendered.
let changeEvent = new Event('change-color');
function changeColorTree() {
	//currentElement is set in main.js
	currentElement.dispatchEvent(changeEvent);
}
