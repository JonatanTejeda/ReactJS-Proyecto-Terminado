import React, { useContext } from "react";
import { Cart } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { CartContext } from "../Provider/CartProvider";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Link to="/Carrito">
        <Cart />
        <span className="notification">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
