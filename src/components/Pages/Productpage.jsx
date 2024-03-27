import axios from 'axios';
import { useEffect, useState } from 'react';
import './Productpage.css';

export default function HomePage() {
    const [menus, setMenus] = useState([]);

    const AddtoCart = async () =>{
      axios.post('https://bubble-tea-cafe-api-production.up.railway.app/api/auth/add-to-cart');
     
    }
  
    const fetcProduct = async () => {
      const response = await axios.get(
        'https://bubble-tea-cafe-api-production.up.railway.app/api/menu'
      );
      const menus_data = response.data;
      setMenus(menus_data.data);
    };
  
    useEffect(() => {
      fetcProduct(); AddtoCart();
    }, []);
    return (
      <div className='grid'>
        {menus.map((menu) => (
          <article key={menu.Id}>
            <img src={menu.image} alt='Sample photo' />
            <div className='text'>
              <h3>{menu.name}</h3>
              <p>
                {menu.category}, {menu.price} Bath
              </p>
              <button onClick={AddtoCart}>Add Product to Cart</button>
            </div>
          </article>
        ))}
      </div>
    );
  }




