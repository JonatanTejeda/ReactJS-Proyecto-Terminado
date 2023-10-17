import React from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemList = ({ productos, titulo }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      {productos.length > 0 &&
        productos.map((producto) => (
          <div key={producto.id}>
            <Item producto={producto} />
            <Link className='ver-mas' to={`/item/${producto.id}`}>Ver Más</Link>
          </div>
        ))}
    </div>
  );
}

export default ItemList;
