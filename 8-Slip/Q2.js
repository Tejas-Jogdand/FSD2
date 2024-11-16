const express = require('express');
const app = express();

app.use(express.json());

let employees = [];

app.post('/employees', (req, res) => {
    const employee = { id: employees.length + 1, ...req.body };
    employees.push(employee);
    res.status(201).json({ message: 'Employee created', employee });
});

app.put('/employees/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) return res.status(404).json({ error: 'Employee not found' });

    Object.assign(employee, req.body);
    res.json({ message: 'Employee updated', employee });
});

app.listen(3000, () => console.log('Server running on port 3000'));
