import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/restaurants/${id}`)
      .then(response => {
        setRestaurant(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>Address: {restaurant.address}</p>
      <p>Phone: {restaurant.phone}</p>
      {/* Additional restaurant details */}
    </div>
  );
}

export default RestaurantDetail;
