//npm init -y
//npm install express
//node filename.js

const express = require('express');
const app = express();
app.use(express.json());  // For parsing application/json request bodies

// Custom middleware function to validate 'name' and 'age'
function validatefunction(req, res, next) {
    const { name, age } = req.body;

    // Check if 'name' is a string
    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ error: 'Name must be a non-empty string' });
    }

    // Check if 'age' is a number and is greater than 0
    if (typeof age !== 'number' || isNaN(age) || age <= 0) {
        return res.status(400).json({ error: 'Age must be a positive number' });
    }

    next();  // If validation passes, proceed to the route handler
}

// POST route that uses the validatefunction middleware
app.post('/submit', validatefunction, (req, res) => {
    const { name, age } = req.body;
    res.json({ message: 'Data received', data: { name, age } });
});

app.listen(3000, () => console.log('Server running on port 3000'));
