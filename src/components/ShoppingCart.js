/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import close from '../images/icons/close.svg';
import '../styles/ShoppingCart.css';
import dataProps from '../Context';
import * as CartItems from './ShoppingCartFactory';

function ShoppingCart() {
  const { count } = useContext(dataProps);
  const { priceCount } = useContext(dataProps);
  const { handleCloseCart } = useContext(dataProps);
  const [purchaseDisplayBtn, setPurchaseDisplayBtn] =
    useState('burchaseBtnHidden');

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  });

  useEffect(() => {
    if (count > 0) {
      setPurchaseDisplayBtn('cartPurchaseBtn');
    } else {
      setPurchaseDisplayBtn('burchaseBtnHidden');
    }
  });

  return (
    <div className="shoppingCartDiv">
      <img
        className="shippingCloseBtn"
        src={close}
        alt="close"
        onClick={() => handleCloseCart()}
      />
      <p className="cartTitle">Shopping Cart</p>
      <div className="cartSubHeader">
        <p>
          You have <b>{count}</b> items in your Shopping Bag
        </p>
        <p className="cartSubTotal">Subtotal: {formatter.format(priceCount)}</p>
      </div>
      <div className="cartItemsContainer">
        <CartItems.CartItem1 />
        <CartItems.CartItem2 />
        <CartItems.CartItem3 />
        <CartItems.CartItem4 />
        <CartItems.CartItem5 />
        <CartItems.CartItem6 />
        <CartItems.CartItem7 />
        <CartItems.CartItem8 />
        <CartItems.CartItem9 />
        <CartItems.CartItem10 />
        <CartItems.CartItem11 />
        <CartItems.CartItem12 />
        <CartItems.CartItem13 />
        <CartItems.CartItem14 />
        <CartItems.CartItem15 />
        <CartItems.CartItem16 />
        <CartItems.CartItem17 />
        <CartItems.CartItem18 />
      </div>
      <Link id="cartPurchaseBtnTxt" to="/">
        <div
          className={purchaseDisplayBtn}
          onClick={() => {
            handleCloseCart();
            alert(
              'Thank you for viewing my work, feel free to view the code on Github as well as explore some of my other projects'
            );
          }}
          role="button"
          tabIndex="0"
        >
          <p>PROCEED TO PURCHASE</p>
        </div>
      </Link>
    </div>
  );
}

export default ShoppingCart;
