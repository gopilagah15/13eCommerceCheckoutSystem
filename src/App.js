import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import PaymentGateway from "./components/PaymentGateway";
import OrderConfirmation from "./components/OrderConfirmation";
import SalesReport from "./components/SalesReport";
import CRM from "./components/CRM";

const App = () => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState(null);
  const [sales, setSales] = useState([]);
  const [customers, setCustomers] = useState([]);

  // Add product to cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  // Confirm order and process payment
  const handleOrderConfirmation = (customer, paymentDetails) => {
    const newOrder = {
      id: sales.length + 1,
      customer,
      cart,
      total: cart.reduce((total, item) => total + item.price, 0),
      date: new Date(),
    };
    setOrder(newOrder);
    setSales([...sales, newOrder]);
    setCustomers([...customers, customer]);
    setCart([]);
  };

  return (
    <div>
      <h1>E-commerce Checkout System</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cart={cart} />
      <PaymentGateway onOrderConfirm={handleOrderConfirmation} />
      {order && <OrderConfirmation order={order} />}
      <SalesReport sales={sales} />
      <CRM customers={customers} />
    </div>
  );
};

export default App;
