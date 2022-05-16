/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import home from '../images/icons/home.png';
import ShoppingCart from './ShoppingCart';
import shoppingBag from '../images/icons/shopping-bag.png';
import ferrariLogo from '../images/icons/FerrariLogo.svg';
import lamborghiniLogo from '../images/icons/lamborghini.svg';
import mercedesLogo from '../images/icons/mercedes-benz.svg';
import porscheLogo from '../images/icons/Porschelogo.svg';
import mclarenLogo from '../images/icons/mclaren.svg';
import astonLogo from '../images/icons/aston-martin.svg';
import customerService from '../images/icons/customer-service-white.svg';
import close from '../images/icons/close.svg';
import cars from './cars';
import '../styles/Header.css';
import dataProps from '../Context';

const Header = () => {
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [scrollDirection, setScrollDirection] = useState('header');
  const [contactDisplay, setContactDisplay] = useState('contactDisplayHidden');
  const [headerCountDisplay, setHeaderCountDisplay] =
    useState('headerCountHide');
  const { handleOpenCart } = useContext(dataProps);
  const { displayShoppingCart } = useContext(dataProps);
  const { count } = useContext(dataProps);

  const handleNavigation = useCallback(() => {
    if (y > window.scrollY) {
      setScrollDirection('header');
    } else if (y < window.scrollY) {
      setScrollDirection('headerScroll');
    }
    setY(window.scrollY);
  }, [y]);

  const handleContactDisplay = () => {
    document.body.style.overflow = 'hidden';
    setContactDisplay('contactDisplay');
  };

  const handleOnClose = () => {
    document.body.style.overflow = 'initial';
    setContactDisplay('contactDisplayHidden');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if (count > 0) {
      setHeaderCountDisplay('headerCartCount');
    } else {
      setHeaderCountDisplay('headerCountHide');
    }
  });

  return (
    <div className={scrollDirection}>
      <div className={displayShoppingCart}>
        <div className="shoppingCartContainer">
          <div className="opacityAnimation">
            <ShoppingCart />
          </div>
        </div>
      </div>
      <div className="headerUpperContainer">
        <div
          className="customerServiceContainer"
          onClick={() => handleContactDisplay()}
          role="button"
          tabIndex={0}
        >
          <img src={customerService} alt="customer service" />
          <p>Contact Us</p>
        </div>
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <div className="homeButtonDiv">
          <Link to="/">
            <img className="homeButton" src={home} alt="home" />
          </Link>
          <img
            className="shoppingBagIcon"
            src={shoppingBag}
            alt="shopping cart"
            onClick={() => handleOpenCart()}
          />
          <p className={headerCountDisplay} onClick={() => handleOpenCart()}>
            {count}
          </p>
        </div>
      </div>
      <div className="headerLowerContainer">
        <ul className="headerDropDown">
          <li className="dropDownTag">
            <p className="underLine">Ferrari</p>
            <div className="carIconsDiv">
              <img className="carIcons" src={ferrariLogo} alt="ferrari logo" />
            </div>
            <div className="dropDownArrow" />
            <div className="dropDownContent">
              <div>
                <Link className="link" to="/car1">
                  <p>F40</p>
                  <img className="cars ferrariColor" src={cars[0]} alt="f40" />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car2">
                  <p>Enzo</p>
                  <img className="cars ferrariColor" src={cars[1]} alt="enzo" />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car3">
                  <p>LaFerrari</p>
                  <img
                    className="cars ferrariColor"
                    src={cars[2]}
                    alt="laferrari"
                  />
                </Link>
              </div>
            </div>
          </li>
          <li className="dropDownTag">
            <p className="mclarenText underLine">Mclaren</p>
            <div className="carIconsDiv">
              <img
                className="mclarenIcon"
                src={mclarenLogo}
                alt="mclaren logo"
              />
            </div>
            <div className="dropDownArrow" />
            <div className="dropDownContent">
              <div>
                <Link className="link" to="/car4">
                  <p>Senna</p>
                  <img
                    className="cars mclarenColor"
                    src={cars[3]}
                    alt="senna"
                  />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car5">
                  <p>F1</p>
                  <img className="cars mclarenColor" src={cars[4]} alt="f1" />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car6">
                  <p>P1</p>
                  <img className="cars mclarenColor" src={cars[5]} alt="p1" />
                </Link>
              </div>
            </div>
          </li>
          <li className="dropDownTag">
            <p className="underLine">Lamborghini</p>
            <div className="carIconsDiv">
              <img
                className="carIcons"
                src={lamborghiniLogo}
                alt="lamborghini logo"
              />
            </div>
            <div className="dropDownArrow" />
            <div className="dropDownContent">
              <div>
                <Link className="link" to="/car7">
                  <p>Sian</p>
                  <img className="cars lamboColor" src={cars[6]} alt="sian" />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car8">
                  <p>Huracan</p>
                  <img
                    className="cars lamboColor"
                    src={cars[7]}
                    alt="Huracan"
                  />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car9">
                  <p>Aventador</p>
                  <img
                    className="cars lamboColor"
                    src={cars[8]}
                    alt="Aventador"
                  />
                </Link>
              </div>
            </div>
          </li>
          <li className="dropDownTag">
            <p className="underLine">Aston Martin</p>
            <div className="astonIconsDiv">
              <img
                className="astonIcon"
                src={astonLogo}
                alt="aston martin logo"
              />
            </div>

            <div className="dropDownArrow" />
            <div className="dropDownContent">
              <div>
                <Link className="link" to="/car10">
                  <p>DBS Superleggera</p>
                  <img
                    className="cars astonColor"
                    src={cars[9]}
                    alt="DBS Superleggera"
                  />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car11">
                  <p>Valkyrie</p>
                  <img
                    className="cars astonColor"
                    src={cars[10]}
                    alt="Valkyrie"
                  />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car12">
                  <p>Victor</p>
                  <img
                    className="cars astonColor"
                    src={cars[11]}
                    alt="Victor"
                  />
                </Link>
              </div>
            </div>
          </li>
          <li className="dropDownTag">
            <p className="underLine">Porsche</p>
            <div className="carIconsDiv">
              <img className="carIcons" src={porscheLogo} alt="" />
            </div>
            <div className="dropDownArrow" />
            <div className="dropDownContent">
              <div>
                <Link className="link" to="/car13">
                  <p>718 Cayman GT4 RS</p>
                  <img
                    className="cars porscheColor"
                    src={cars[12]}
                    alt="senna"
                  />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car14">
                  <p>718 Spyder</p>
                  <img className="cars porscheColor" src={cars[13]} alt="f1" />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car15">
                  <p>911 Turbo S</p>
                  <img className="cars porscheColor" src={cars[14]} alt="p1" />
                </Link>
              </div>
            </div>
          </li>
          <li className="dropDownTag">
            <p className="underLine">Mercedes</p>
            <div className="carIconsDiv">
              <img className="carIcons" src={mercedesLogo} alt="" />
            </div>
            <div className="dropDownArrow" />
            <div className="dropDownContent">
              <div>
                <Link className="link" to="/car16">
                  <p>AMG GT R</p>
                  <img
                    className="cars mercedesColor"
                    src={cars[15]}
                    alt="AMG GT R"
                  />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car17">
                  <p>AMG SL Roadster</p>
                  <img
                    className="cars mercedesColor"
                    src={cars[16]}
                    alt="AMG SL Roadster"
                  />
                </Link>
              </div>
              <div>
                <Link className="link" to="/car18">
                  <p>Project One</p>
                  <img
                    className="cars mercedesColor"
                    src={cars[17]}
                    alt="Project One"
                  />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={contactDisplay}>
        <div>
          <img
            className="shippingCloseBtn"
            id="shippingClose"
            src={close}
            alt="close"
            onClick={handleOnClose}
          />
          <div className="shippingInfoDiv">
            <h4 className="contactSubHeading">TELEPHONE</h4>
            <p className="contactText">
              Please do not hesitate to contact us by phone. Our operators are
              available Monday to Friday, from 8:00 am to 8:00 pm GMT.{' '}
            </p>
            <h4>EMAIL</h4>
            <p className="contactText">
              Send an e-mail for any requests you might have. We will respond
              within 24 hours, Monday to Friday, from 9:00 am to 9:00 pm.
              Holidays excluded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
