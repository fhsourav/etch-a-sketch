const container = document.querySelector("#container");

for (let i = 0; i < (16 * 16); i++) {
	let div = document.createElement("div");
	div.classList.add("grid");
	div.id = "div" + i;
	div.addEventListener("mouseenter", () => {
		div.style.backgroundColor = "black";
	});
	container.appendChild(div);
}

function changeColor(grid) {
	grid.style.backgroundColor = "black";
}

// const grids = document.querySelectorAll(".grid");
// grids.forEach((grid) => {
// 	grid.addEventListener("onMouseOver", changeColor(grid));
// })
