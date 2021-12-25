/* eslint-disable react/jsx-no-target-blank */
import './Cart.scss';
import React from 'react';
import Button from '@mui/material/Button';

const Cart = (props) => {
  const cartItems = props.cartItems.map(cartItem =>
      <div className="cart-item" key={cartItem.id}>
          <div className="cart-item__image">x</div>
          <div className="cart-item__text">
              <div className="cart-item__name">{cartItem.name}</div>
              <div className="cart-item__values">
                  <div className="cart-item__price">{cartItem.price}</div>
                  <div className="cart-item__quantity">x{cartItem.quantity}</div>
              </div>
          </div>
      </div>
  );
  return (
      <div className="cart">
          <div className="cart__header">
              Your Cart
          </div>
          <div className="cart__items">
              {cartItems}
          </div>
          <Button
              variant="contained"
              className="cart__checkout"
          >Checkout</Button>
      </div>
  );
}

export default Cart
