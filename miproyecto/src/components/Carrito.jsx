import React, { useContext } from "react";
import { CartContext } from "../Provider/CartProvider";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

function Carrito() {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="container">
      <h1 className="titulo">Carrito</h1>

      {carrito.map((prod) => (
        <div className="producto-separador">
          {prod.image && (
            <img
              src={prod.image}
              alt={prod.titulo}
              className="img-producto"
            />
          )}
          <br />
          <h3>{prod.titulo}</h3>
          <p>Precio unidad: ${prod.price}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio total: ${prod.price * prod.cantidad}</p>
          <br />
        </div>
      ))}

      {carrito.length > 0 ? (
        <>
          <h2>PRECIO TOTAL: ${precioTotal()}</h2>
          <button className="enviar" onClick={handleVaciar}>
            VACIAR CARRITO
          </button>
          <div className="Checkout">
            <Link to="/Checkout">       
              <button className="enviar" onClick={Checkout}>
                Finalizar Compra
              </button>
            </Link>
          </div>
        </>
      ) : (
        <h4> El Carrito Está Vacío 😕</h4>
      )}
    </div>
  );
}

export default Carrito;