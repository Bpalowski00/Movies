const Joi = require('joi');

const logger = require('./logger');

const movie = require('./routes/movie');

const express = require('express');

const app = express();

app.use(express.json());

app.use(logger);
app.use(express.static('public'));
app.use('/api/movies', movie);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}... `)
})