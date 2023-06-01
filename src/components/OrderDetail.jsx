import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function OrderDetail() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/orders/${id}`)
      .then(response => {
        setOrder(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order Number: {order.orderNumber}</p>
      <p>Status: {order.status}</p>
      {/* Additional order details */}
    </div>
  );
}

export default OrderDetail;
