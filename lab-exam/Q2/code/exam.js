const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const products = [
  {
    id: 1,
    name: 'Soap',
    description: 'Body washing soap for kids',
    price: 90,
  },
  {
    id: 2,
    name: 'Toys',
    description: 'Entertainment for kids',
    price: 200,
  },
];

app.get('/store/products', (req, res) => {
  res.json(products);
});

app.post('/store/products', (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});