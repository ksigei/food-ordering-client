import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function OrderItemList() {
  const [orderItems, setOrderItems] = useState([]);
  const { orderId } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/orders/${orderId}/items`)
      .then(response => {
        setOrderItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [orderId]);

  return (
    <div>
      <h1>Order Items</h1>
      <ul>
        {orderItems.map(orderItem => (
          <li key={orderItem.id}>
            <p>Item: {orderItem.name}</p>
            <p>Quantity: {orderItem.quantity}</p>
            {/* Additional order item details */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderItemList;
