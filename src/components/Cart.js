import React from 'react'

const Cart = ({ cart }) => (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
    </div>
  );
  

export default Cart