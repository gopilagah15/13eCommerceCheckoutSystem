import React from 'react'

const ProductList = ({ onAddToCart }) => {
    const products = [
      { id: 1, name: "Product A", price: 50 },
      { id: 2, name: "Product B", price: 75 },
    ];
  
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default ProductList