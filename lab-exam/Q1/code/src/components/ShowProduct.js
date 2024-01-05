import React from 'react';

function ProductList(props) {
  const products = props.products;

  const productRows = products.map((product) => (
    <tr key={product.id}>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
    </tr>
  ));

  return (

    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {productRows}
  </tbody>
</table>
  );
}

export default ProductList;