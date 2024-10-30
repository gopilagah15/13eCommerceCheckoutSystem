import React from 'react'

const CRM = ({ customers }) => (
    <div>
      <h2>Customer Management</h2>
      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );

export default CRM
  