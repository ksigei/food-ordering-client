import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';

const OrderDetailPage = () => {
  const { orderId } = useParams();
  const { order, setOrder } = useContext(OrderContext);

  useEffect(() => {
    // Fetch order details from the API based on orderId
    fetch(`http://localhost:8000/api/orders/${orderId}`)
      .then(response => response.json())
      .then(data => setOrder(data))
      .catch(error => console.log(error));
  }, [orderId, setOrder]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Order Detail</h2>
      <h3>Order ID: {order.id}</h3>
      <p>Menu: {order.menu.name}</p>
      <p>Quantity: {order.quantity}</p>
      <p>Price: ${order.price}</p>
    </div>
  );
};

export default OrderDetailPage;
