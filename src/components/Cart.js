/* eslint-disable react/jsx-no-target-blank */
import './Cart.scss';
import React from 'react';
import Button from '@mui/material/Button';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
    list: {
        width: "100%",
        maxWidth: 360,
        bgcolor: "white"
    },
    listItem: {
        height: 50,
        size: 12
    },
    listItemText: {
        size: 12
    }
};

const Cart = (props) => {
  const cartItems = props.cartItems.map(cartItem =>
      <div>
          <ListItem sx={style.listItem} className="cart-item" key={cartItem.id}>
              <div className="cart-item__image">x</div>
              <div className="cart-item__text">
                  <ListItemText sx={style.listItemText} primary={cartItem.name} className="cart-item__name" />
                  <div className="cart-item__values">
                      <div className="cart-item__price">{cartItem.price}</div>
                      <div className="cart-item__quantity">x{cartItem.quantity}</div>
                  </div>
              </div>
          </ListItem>
          <Divider />
      </div>
  );
  return (
      <div className="cart">
          <div className="cart__header">
              Your Cart
          </div>
          <List sx={style.list} component="nav" aria-label="mailbox folders" className="cart__items">
              {cartItems}
          </List>
          <Button
              variant="contained"
              className="cart__checkout"
          >Checkout</Button>
      </div>
  );
}

export default Cart
