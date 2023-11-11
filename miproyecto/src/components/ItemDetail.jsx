import React, { createContext, useContext } from "react";
import { useState } from "react";
import { CartContext, CartProvider } from "../Provider/CartProvider";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  if (!item) {
    return <div>Cargando...</div>;
  }

  const { title, category, price, image } = item;

  const { carrito, agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={image} alt={title} />
        <div>
          <h2 className="titulo">{title}</h2>
          <p className="categoria">{category}</p>
          <p className="precio">Precio: ${price}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
