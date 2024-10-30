import React, { useState } from 'react'

const PaymentGateway = ({ onOrderConfirm }) => {
    const [customer, setCustomer] = useState({ name: "", email: "" });
    const [paymentDetails, setPaymentDetails] = useState("");
  
    const handlePayment = () => {
      onOrderConfirm(customer, paymentDetails);
    };
  
    return (
      <div>
        <h2>Payment</h2>
        <input
          type="text"
          placeholder="Customer Name"
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
        />
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    );
  };
  

export default PaymentGateway