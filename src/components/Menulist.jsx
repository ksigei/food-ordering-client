import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Menu List</h1>
      <ul>
        {menus.map(menu => (
          <li key={menu.id}>
            <Link to={`/menu/${menu.id}`}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
