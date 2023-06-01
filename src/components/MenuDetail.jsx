import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MenuDetail() {
  const [menu, setMenu] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/menus/${id}`)
      .then(response => {
        setMenu(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!menu) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{menu.name}</h1>
      <p>Description: {menu.description}</p>
      <p>Price: {menu.price}</p>
    </div>
  );
}

export default MenuDetail;
