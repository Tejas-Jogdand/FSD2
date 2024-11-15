const express = require('express');
const app = express();

app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
    const {user,name} = { id: users.length + 1, ...req.body };
    users.push(user);
    res.status(201).json({ message: 'User created', user });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(8000, () => console.log('Server running on port 8000'));


//curl -X POST http://localhost:8000/users -H "Content-Type : application/json" -d "{\"name\":\"John\", \"age\":21}"