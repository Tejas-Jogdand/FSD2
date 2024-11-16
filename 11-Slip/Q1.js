const express = require('express');
const app = express();

app.use(express.json());

let movies = [];

app.post('/movies', (req, res) => {
    const movie = { id: movies.length + 1, ...req.body };
    movies.push(movie);
    res.status(201).json({ message: 'Movie created', movie });
});

app.listen(3000, () => console.log('Server running on port 3000'));
