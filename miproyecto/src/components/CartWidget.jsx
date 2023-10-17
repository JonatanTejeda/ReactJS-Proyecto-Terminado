import React from 'react';
import { Cart } from 'react-bootstrap-icons';

const CartWidget = () => {
  const itemCount = 3;

  return (
    <div className="cart-widget">
      <Cart/>
      <span className="notification">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
