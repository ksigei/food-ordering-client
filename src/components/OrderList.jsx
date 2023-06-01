import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/orders')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <Link to={`/orders/${order.id}`}>{order.orderNumber}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
