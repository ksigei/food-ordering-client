import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/MenuList.css';

function MenuList() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/menus')
      .then(response => {
        setMenus(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="menu-list-container">
      <h1>Menu List</h1>
      <ul className="menu-list">
        {menus.map(menu => (
          <li key={menu.id} className="menu-preview">
            <Link to={`/menu/${menu.id}`}>{menu.name}</Link>
            <p>{menu.description}</p>
            <p>{menu.price}</p>
            <p>{menu.restaurant}</p>
            <Link to={`/menu/${menu.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
