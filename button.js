let changeEvent = new Event('change-color');
function changeColorTree() {
	currentElement.dispatchEvent(changeEvent);
}
