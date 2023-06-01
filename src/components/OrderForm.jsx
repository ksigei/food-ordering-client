import React, { useState } from 'react';

const OrderForm = () => {
  const [user_id, setUser_id] = useState('');
  const [restaurant_id, setRestaurant_id] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    // Create the order using the API
    fetch('http://localhost:8000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id, restaurant_id, date }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the successful response
      })
      .catch(error => console.log(error));

    // Reset the form
    setUser_id('');
    setRestaurant_id('');
    setDate('');
  };

  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user_id">
            User ID
            <input
              type="text"
              id="user_id"
              value={user_id}
              onChange={e => setUser_id(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="restaurant_id">
            Restaurant ID
            <input
              type="text"
              id="restaurant_id"
              value={restaurant_id}
              onChange={e => setRestaurant_id(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="date">
            Date
            <input
              type="text"
              id="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
