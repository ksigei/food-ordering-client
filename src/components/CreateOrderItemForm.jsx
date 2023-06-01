import { useState } from 'react';
import axios from 'axios';

function CreateOrderItemForm() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const orderItemData = {
      name,
      quantity
    };

    axios.post('http://localhost:8000/api/order-items', orderItemData)
      .then(response => {
        console.log(response.data);
        // Reset form fields
        setName('');
        setQuantity('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create Order Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateOrderItemForm;
