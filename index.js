function ScrollFunc() {
	var element = document.querySelector(".goto");

	element.scrollIntoView({ behavior: 'smooth', block: 'end'});
}