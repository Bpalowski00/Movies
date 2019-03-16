class Movie {
	constructor() {
		this.api_key = 'faf9d41415df7aa1b0a12d8547b6ee45';

	}

	async getMovie(movie) {
		const movieResponse = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${this.api_key}&query=${movie}`);
		const profileData = await movieResponse.json();
		return profileData;

	}
	async getActor(movie) {
		const movieResponse = await fetch(`https://api.themoviedb.org/3/search/person?api_key=${this.api_key}&query=${movie}`);

		const profileData = await movieResponse.json();

		return profileData;

	}

}

