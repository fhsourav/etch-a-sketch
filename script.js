function createGrids(gridLength) {
	container = document.createElement("div");
	container.id = "container";

	body.appendChild(container);

	for (let i = 0; i < (gridLength * gridLength); i++) {
		let div = document.createElement("div");
		div.classList.add("grid");
		div.id = "div" + i;
		div.style.width = (640 / gridLength) + "px";
		div.style.height = (640 / gridLength) + "px";
		div.addEventListener("mouseenter", () => {
			div.style.backgroundColor = "black";
		});
		container.appendChild(div);
	}
}

const body = document.querySelector("body");

const popupButton = document.createElement("button");
popupButton.textContent = "Grid Length";

let container = document.createElement("div");
container.id = "container";

body.appendChild(popupButton);

let gridLength = 16;

createGrids(gridLength);

popupButton.addEventListener("click", () => {
	gridLength = window.prompt("Grid Length");
	body.removeChild(container);
	createGrids(gridLength);
});
