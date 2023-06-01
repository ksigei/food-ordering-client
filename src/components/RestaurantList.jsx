import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h1>Restaurant List</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
