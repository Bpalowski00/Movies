const express = require('express');
const router = express.Router();

const movies = [
	{ id: 1, movie: 'Terminater' },
	{ id: 2, movie: 'James Bond' }
];


// Getting all the movies
router.get('/', (req, res) => {
	res.send(movies)
})

// Selecting Movie By Id
router.get('/:id', (req, res) => {
	const findMovies = movies.find(movie => movie.id === parseInt(req.params.id));
	// Validation
	if (!findMovies) {
		res.status(404).send('This is not a good id number please look for a new one');
		return;
	}
	res.send(findMovies);
})


router.post('/', (req, res) => {

	const newMovie = {
		id: movies.length + 1,
		movie: req.body.movie
	};

	movies.push(newMovie);
	res.send(newMovie);
});






router.put('/:id', (req, res) => {
	const findMovies = movies.find(movie => movie.id === parseInt(req.params.id));
	// Validation
	if (!findMovies) {
		res.status(404).send('This is not a good id number please look for a new one');
		return;
	}


	// const result = validatemovie(req.body);
	const { error } = validatemovie(req.body);
	if (error) {
		res.status(404).send(error.details[0].message);
	}
	// if (result.error) {
	// 	res.status(404).send(result.error.details[0].message);
	// }

	findMovies.movie = req.body.movie;
	res.send(findMovies);
});
function validatemovie(movie) {
	const schema = {
		movie: Joi.string().min(3).required()
	};
	return Joi.validate(movie, schema);
}

router.delete('/:id', (req, res) => {
	const findMovies = movies.find(movie => movie.id === parseInt(req.params.id));
	// Validation
	if (!findMovies) {
		res.status(404).send('This is not a good id number please look for a new one');
		return;
	}

	const index = movies.indexOf(findMovies);
	movies.splice(index, 1);
	res.send(findMovies);
});

module.exports = router;