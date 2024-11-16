const express = require('express');
const app = express();

app.use(express.json());

let data = [];

app.post('/data', (req, res) => {
    const { name, value } = req.body;
    if (!name || !value) {
        return res.status(400).json({ error: 'Name and value are required' });
    }

    const item = { id: data.length + 1, name, value };
    data.push(item);
    res.status(201).json({ message: 'Data added', item });
});

app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
