import React, { useState } from 'react';
import ProductList from './ShowProduct';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      name: productName,
      description: productDescription,
      price: productPrice,
    };
    setProducts([...products, product]);
    setProductName('');
    setProductDescription('');
    setProductPrice('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
        </label>
        <br/>
        <br/>
        <label>
          Product Description:
          <textarea value={productDescription} onChange={(event) => setProductDescription(event.target.value)} />
        </label>
        <br/>
        <br/>
        <label>
          Product Price:
          <input type="number" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} />
        </label>
        <br/>
      <br/>
        <button type="submit">Submit</button>
      </form>
      <br/>
      <br/>
      <ProductList products={products} />
    </div>
  );
}

export default AddProduct;