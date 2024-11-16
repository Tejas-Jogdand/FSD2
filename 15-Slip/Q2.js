const employees = [
    { id: 1, name: 'John Doe', salary: 20000 },
    { id: 2, name: 'Jane Smith', salary: 30000 },
    { id: 3, name: 'Sam Johnson', salary: 25000 }
];

const highSalaryEmp = employees.find(emp => emp.salary > 25000);
console.log("Employee with salary > 25000:", highSalaryEmp);
