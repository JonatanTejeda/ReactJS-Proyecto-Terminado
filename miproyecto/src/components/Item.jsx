import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="producto">
      <img src={producto.image} alt={producto.title} />
      <div>
        <h4>{producto.title}</h4>
        <p>${producto.price}</p>
        <p>Categoría: {producto.category}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>
          Ver Más
        </Link>
      </div>
    </div>
  );
};

export default Item;
