/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import ferrariLogo from '../../../images/icons/whiteBGIcons/FerrariLogo.svg';
import lamborghiniLogo from '../../../images/icons/whiteBGIcons/lamborghini.svg';
import mercedesLogo from '../../../images/icons/whiteBGIcons/mercedes-benz.svg';
import porscheLogo from '../../../images/icons/whiteBGIcons/Porschelogo.svg';
import mclarenLogo from '../../../images/icons/whiteBGIcons/mclarenTick.png';
import astonLogo from '../../../images/icons/whiteBGIcons/aston-martin.svg';
import Subscribe from '../../Subscribe';
import dataProps from '../../../Context';

function CarFactory(
  carID,
  title,
  logo,
  logoClassName,
  carImage,
  price,
  horsePower,
  speed,
  color
) {
  const { handleItemDisplay } = useContext(dataProps);
  const { handleOpenCart } = useContext(dataProps);
  const { handlePriceCount } = useContext(dataProps);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  });

  return (
    <div>
      <Header />
      <div className="fillerDiv" />
      <div className="CarFactoryMain">
        <div className="CarFactoryTitleContainer">
          <p className="CarFactoryTitleText">{title}</p>
          <img className={logoClassName} src={logo} alt="" />
        </div>
        <div className="carFactoryContentContainer">
          <div className="carFactorySideTab">
            <p className="carFactorySideTitle">{title}</p>
            <div className="carFactorySideTabDiv">
              <div className="carFactoryCarNamesSideDiv">
                <Link to="/AllCars" className="link">
                  <p className="allCarsHighLight">ALL CARS</p>
                </Link>
                <Link to="/AllCars/FerrariPage" className="link">
                  <p className="ferrariHighLight">Ferrari</p>
                </Link>
                <Link to="/AllCars/MclarenPage" className="link">
                  <p className="mclarenHighLight">Mclaren</p>
                </Link>
                <Link to="/AllCars/LamboPage" className="link">
                  <p className="lamboHighLight">Lamborghini</p>
                </Link>
                <Link to="/AllCars/AstonPage" className="link">
                  <p className="astonHighLight">Aston Martin</p>
                </Link>
                <Link to="/AllCars/PorschePage" className="link">
                  <p className="porscheHighLight">Porsche</p>
                </Link>
                <Link to="/AllCars/MercedesPage" className="link">
                  <p className="mercedesHighLight">Mercedes</p>
                </Link>
              </div>
              <div className="carFactoryIconsSideDiv">
                <div className="fillerSideImg" />
                <img src={ferrariLogo} alt="ferrari" />
                <img src={mclarenLogo} alt="mclaren" />
                <img src={lamborghiniLogo} alt="Lamborghini" />
                <img src={astonLogo} alt="Aston Martin" />
                <img src={porscheLogo} alt="Porsche" />
                <img src={mercedesLogo} alt="Mercedes" />
              </div>
            </div>
          </div>
          <div className="carFactoryCarContent">
            <img className="carFactoryMainImage" src={carImage} alt="" />
            <div className="buyCarContainer">
              <p className="buyCarTitle">{title}</p>
              <p>{horsePower}</p>
              <p>{speed}</p>
              <p className="carFactoryPrice">{formatter.format(price)}</p>
              <p
                id={carID}
                data-price={price}
                className={`addToBagButton ${color}`}
                type="button"
                onClick={(e) => {
                  handleOpenCart();
                  handleItemDisplay(e);
                  handlePriceCount(e);
                }}
              >
                ADD TO SHOPPING BAG
              </p>
              <p
                id={carID}
                data-price={price}
                className={`buyNowButton ${color}`}
                type="button"
                onClick={(e) => {
                  handleOpenCart();
                  handleItemDisplay(e);
                  handlePriceCount(e);
                }}
              >
                BUY IT NOW
              </p>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default CarFactory;
