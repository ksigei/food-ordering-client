import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/RestaurantDetail.css';
import '../css/MenuList.css';


function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState(null);
  const [menus, setMenus] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/restaurants/${id}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('http://localhost:8000/api/menus')
      .then((response) => {
        const allMenus = response.data;
        const filteredMenus = allMenus.filter((menu) => menu.restaurant_id === parseInt(id));
        setMenus(filteredMenus);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!restaurant || !menus) {
    return <div>Loading...</div>;
  }

  return (
    <div className="restaurant-detail-container">
      <h1>{restaurant.name}</h1>
      <p>Address: {restaurant.address}</p>
      <p>Phone: {restaurant.phone_number}</p>

      <div className="menu-list-container">
        <h1>{restaurant.name}'s Menu</h1>
        {menus.length > 0 ? (
          <ul className="menu-list">
            {menus.map((menu) => (
              <li key={menu.id} className="menu-preview">
                <p>{menu.name}</p>
                <p>{menu.price}</p>
                <p>{menu.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No menu available</p>
        )}
      </div>
    </div>
  );
}

export default RestaurantDetail;
