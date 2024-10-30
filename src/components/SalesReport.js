import React from 'react'

const SalesReport = ({ sales }) => {
    const dailySales = sales.reduce((acc, sale) => acc + sale.total, 0);
    const monthlySales = dailySales * 30; // Example for monthly calculation
  
    return (
      <div>
        <h2>Sales Report</h2>
        <p>Daily Sales: ${dailySales}</p>
        <p>Monthly Sales (approx.): ${monthlySales}</p>
      </div>
    );
  };
  

export default SalesReport