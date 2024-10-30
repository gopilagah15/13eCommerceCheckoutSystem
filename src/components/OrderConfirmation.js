import React from 'react'

const OrderConfirmation = ({ order }) => (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you, {order.customer.name}!</p>
      <p>Your order ID is #{order.id}.</p>
      <p>Total: ${order.total}</p>
    </div>
  );
  

export default OrderConfirmation