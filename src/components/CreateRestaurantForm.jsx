import { useState } from 'react';
import axios from 'axios';

function CreateRestaurantForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const restaurantData = {
      name,
      address,
      phone
    };

    axios.post('http://localhost:8000/api/restaurants', restaurantData)
      .then(response => {
        console.log(response.data);
        // Reset form fields
        setName('');
        setAddress('');
        setPhone('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Create Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateRestaurantForm;
