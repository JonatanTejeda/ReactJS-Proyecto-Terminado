import React from 'react';

const ItemDetail = ({ item }) => {
  if (!item) {
    return <div>Cargando...</div>;
  }

  const { title, categoria, price, image } = item;

  return (
    <div>
      <h2>{title}</h2>
      <p>{categoria}</p>
      <p>Precio: ${price}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default ItemDetail;
