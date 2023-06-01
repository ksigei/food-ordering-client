import React, { useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../context/MenuContext';
import '../css/MenuList.css';

const MenuList = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/menus')
      .then(response => response.json())
      .then(data => {
        setMenus(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className = "menu-list-container">
      <h1>Menus</h1>
      <div className = "menu-list">
        {menus.map(menu => (
            <div className = "menu-preview" key={menu.id}>
                <Link to={`/menu/${menu.id}`}>{menu.name}</Link>
                <p>{menu.description}</p>
                <p>{menu.price}</p>
                <p>Description: {menu.description}</p>
            </div>
        ))}
    </div>
    </div>
  );
};

export default MenuList;
