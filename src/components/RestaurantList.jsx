import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/RestaurantList.css';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/restaurants')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="restaurant-list-container">
      <h1>Restaurant List</h1>
      <ul className="restaurant-list">
        {restaurants.map(restaurant => (
          <li key={restaurant.id} className="restaurant-preview">
            <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
            <p>{restaurant.description}</p>
            <p>{restaurant.address}</p>
            <p>{restaurant.phone_number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
