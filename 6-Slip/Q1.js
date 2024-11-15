const express = require('express');
const app = express();

app.use(express.json());

let products = [];

app.post('/products', (req, res) => {
    const product = { id: products.length + 1, ...req.body };
    products.push(product);
    res.status(201).json({ message: 'Product created', product });
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => console.log('Server running on port 3000'));
