import React from 'react';
import Item from './Item';

const ItemList = ({ productos, titulo }) => {
  return (
    <div>
       <h1>{titulo}</h1>
   <div className='div-productos'>
      {productos.length > 0 &&
        productos.map((producto) => (
          <div key={producto.id}>
            <Item producto={producto} />
          </div>
        ))}
    </div>
    </div>
  );
}

export default ItemList;
