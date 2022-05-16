/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import '../styles/Footer.css';
import gitLogo from '../images/GitHubMark.png';
import payPal from '../images/icons/paypal-white.svg';
import americanExpress from '../images/icons/american-express-white.svg';
import jcb from '../images/icons/jcb-white.svg';
import maestro from '../images/icons/maestro-white.svg';
import mastercard from '../images/icons/mastercard-white.svg';
import visa from '../images/icons/visa-white.svg';
import facebook from '../images/icons/facebook-white.svg';
import instagram from '../images/icons/instagram-white.svg';
import twitter from '../images/icons/twitter-white.svg';
import shipping from '../images/icons/clock.svg';
import returnItem from '../images/icons/return-item.svg';
import close from '../images/icons/close.svg';

const Footer = () => {
  const [className, setClassName] = useState('shoppingHide');
  const [classNameTwo, setClassNameTwo] = useState('returnHide');

  const handleOnOpen = (e) => {
    document.body.style.overflow = 'hidden';
    if (e.target.id === 'shippingDiv') {
      setClassName('shippingInfoContainer');
    } else {
      setClassNameTwo('returnInfoContainer');
    }
  };

  const handleOnClose = (e) => {
    document.body.style.overflow = 'initial';
    if (e.target.id === 'shippingClose') {
      setClassName('shoppingHide');
    } else {
      setClassNameTwo('returnHide');
    }
  };

  return (
    <div>
      <div className={className}>
        <div className="shippingInfoDiv">
          <img
            className="shippingCloseBtn"
            id="shippingClose"
            src={close}
            alt="close"
            onClick={handleOnClose}
          />
          <h2>Shipping</h2>
          <p className="shippingSubTitle">Standard Shipping</p>
          <p className="shippingSubText">Delivery in 4-6 working days</p>
          <p className="shippingSubText">£ 700</p>
          <p className="shippingSubTitle">Express Shipping</p>
          <p className="shippingSubText">Delivery in 1-3 working days</p>
          <p className="shippingSubText">£ 1,500</p>
          <p className="shippingSubTitle">Saturday Shipping</p>
          <p className="shippingSubText">
            Delivery guaranteed on Saturday morning
          </p>
          <p className="shippingSubText">£ 1,900</p>
          <p className="shippingSubTitle">Next Day Shipping</p>
          <p className="shippingSubText">
            Delivery guaranteed next working day
          </p>
          <p className="shippingSubText">£ 2,500</p>
        </div>
      </div>
      <div className={classNameTwo}>
        <div className="shippingInfoDiv">
          <img
            className="shippingCloseBtn"
            src={close}
            alt="close"
            onClick={handleOnClose}
          />
          <h2>Returns</h2>
          <p className="shippingSubText">
            You can return any product within 14 days of the delivery date.
          </p>
          <p className="shippingSubText">
            Fill in the online Return Form and call UPS to request a pick-up or
            download and consult the Hardcopy Return Form to exercise your right
            to return. Discover all details on how to return in the Customer
            Care area.
          </p>
        </div>
      </div>
      <div className="shippingReturns">
        <div
          className="shippingDiv"
          id="shippingDiv"
          role="button"
          tabIndex={0}
          onClick={handleOnOpen}
        >
          <img id="shippingDiv" src={shipping} alt="shipping" />
          <p id="shippingDiv">SHIPPING</p>
        </div>
        <div
          className="returnDiv"
          onClick={handleOnOpen}
          role="button"
          tabIndex={0}
        >
          <img src={returnItem} alt="return item" />
          <p>RETURNS</p>
        </div>
      </div>
      <div
        className="scrollToTop"
        role="button"
        tabIndex={0}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <div className="scrollToTopArrow" />
        <p>BACK TO TOP</p>
      </div>
      <div className="lowerFooter">
        <div className="lowerFooterLeft">
          <p>Secure payments with:</p>
          <div className="paymentIconsDiv">
            <img className="paymentIcons" src={visa} alt="mastercard" />
            <img className="paymentIcons" src={mastercard} alt="mastercard" />
            <img
              className="paymentIcons"
              src={americanExpress}
              alt="american express"
            />
            <img className="paymentIcons" src={maestro} alt="maestro" />
            <img className="paymentIcons" src={jcb} alt="jcb" />
            <img className="paymentIcons" src={payPal} alt="paypal" />
          </div>
        </div>
        <div className="lowerFooterRight">
          <p>Follow us on:</p>
          <div className="socialIconsDiv">
            <img className="socialIcons" src={facebook} alt="paypal" />
            <img className="socialIcons" src={instagram} alt="paypal" />
            <img className="socialIcons" src={twitter} alt="paypal" />
          </div>
        </div>
      </div>
      <div className="gitTag">
        <img src={gitLogo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
