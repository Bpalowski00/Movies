
const movie = new Movie;
const ui = new UI;

const inputField = document.getElementById('inputFirst');

document.getElementById('button-1').addEventListener('click', loadMovie);

document.getElementById('button-2').addEventListener('click', loadActor);

function loadMovie(e) {
	movie.getMovie(inputField.value)
		.then(data => {
			ui.showMovie(data.results);
		})
	e.preventDefault();
}

function loadActor(e) {
	movie.getActor(inputField.value)
		.then(data => {
			ui.showActor(data.results);
		})
	if (click) {
		ui.showShowCard(data.results);
	}
	e.preventDefault();
}

