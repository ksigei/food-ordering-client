import React, { useState } from 'react';

const OrderForm = () => {
  const [menuId, setMenuId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Create the order using the API
    fetch('http://localhost:8000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu_id: menuId, quantity }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the successful response
      })
      .catch(error => console.log(error));

    // Reset the form
    setMenuId('');
    setQuantity('');
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="menuId">Menu:</label>
          <input
            type="text"
            id="menuId"
            value={menuId}
            onChange={e => setMenuId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OrderForm;
