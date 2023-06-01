import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';

const MenuDetailPage = () => {
  const { menuId } = useParams();
  const { menu, setMenu } = useContext(MenuContext);

  useEffect(() => {
    // Fetch menu details from the API based on menuId
    fetch(`http://localhost:8000/api/menus/${menuId}`)
      .then(response => response.json())
      .then(data => setMenu(data))
      .catch(error => console.log(error));
  }, [menuId, setMenu]);

  if (!menu) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Menu Detail</h2>
      <h3>Name: {menu.name}</h3>
      <p>Price: ${menu.price}</p>
      <p>Description: {menu.description}</p>
    </div>
  );
};

export default MenuDetailPage;
