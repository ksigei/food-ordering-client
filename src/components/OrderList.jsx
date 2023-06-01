import React, { useEffect, useState } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the API
    fetch('http://localhost:8000/api/orders')
      .then(response => response.json())
      .then(data => setOrders(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      {orders.map(order => (
        <div key={order.id}>
          <h3>Order ID: {order.id}</h3>
          {/* <p>Menu: {order.menu.name}</p> */}
          <p>Restaurant: {order.restaurant}</p>
          {/* <p>Price: ${order.price}</p> */}
        </div>
      ))}
    </div>
  );
};

export default OrderList;
