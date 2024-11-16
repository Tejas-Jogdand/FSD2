const express = require('express');
const app = express();

app.use(express.json());

app.post('/data', (req, res) => {
    const { name, value } = req.body;
    if (!name || !value) {
        return res.status(400).json({ error: 'Name and value are required' });
    }
    res.status(201).json({ message: 'Data added successfully', data: { name, value } });
});

app.listen(3000, () => console.log('Server running on port 3000'));
