class UI {
	constructor() {
		this.profile = document.getElementById('output');
	}


	showMovie(users) {
		let output = "";
		let imgURL = 'http://image.tmdb.org/t/p/original';
		users.forEach(function (user) {
			output += `
			<p>${user.title}</p>
			<img src="${imgURL}${user.backdrop_path}">
					`;
		});
		document.getElementById('output').innerHTML = output;
	}

	showActor(users) {
		let output = "";
		let imgURL = 'http://image.tmdb.org/t/p/original';
		users.forEach(function (user) {
			output += `
			<p>${user.name}</p>
			<img src="${imgURL}${user.profile_path}">
					`;
		});
		document.getElementById('output').innerHTML = output;
	}


}