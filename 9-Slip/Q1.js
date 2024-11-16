const companies = [
    { id: 1, name: 'Company A', workforce: 25 },
    { id: 2, name: 'Company B', workforce: 40 }
];

const largeCompany = companies.find(company => company.workforce > 30);
console.log("Company with workforce > 30:", largeCompany);
