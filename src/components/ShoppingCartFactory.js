/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import add from '../images/icons/add.svg';
import minus from '../images/icons/minus.svg';
import dataProps from '../Context';
import carImages from './cars';

function ShoppingCartFactory(carID, carName, carPrice, carImageNumber) {
  const { CarCount } = useContext(dataProps);
  const { ItemDisplay } = useContext(dataProps);
  const { handleItemRemove } = useContext(dataProps);
  const { handlePriceCount } = useContext(dataProps);
  const { handleCount } = useContext(dataProps);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
  });

  return (
    <div className={ItemDisplay[carID]}>
      <div id="cartItemSubContainer">
        <div>
          <p className="cartCarName">{carName}</p>
          <p>{formatter.format(carPrice)}</p>
          <div className="quantityContainer">
            <p>Quantity:</p>
            <div className="quantityIcons">
              <img
                className="quantityMinus"
                id={carID}
                data-price={carPrice}
                onClick={(e) => handleItemRemove(e)}
                src={minus}
                alt=""
              />
            </div>
            <p>{CarCount[carID]}</p>
            <div className="quantityIcons">
              <img
                id={carID}
                className="quantityAdd"
                data-price={carPrice}
                onClick={(e) => {
                  handlePriceCount(e);
                  handleCount(e);
                }}
                src={add}
                alt=""
              />
            </div>
          </div>
        </div>
        <img className="cartMainImage" src={carImages[carImageNumber]} alt="" />
      </div>
    </div>
  );
}

function CartItem1() {
  return ShoppingCartFactory('car1', 'Ferrari F40', '1250000', 0);
}

function CartItem2() {
  return ShoppingCartFactory('car2', 'Ferrari Enzo', '1000000', 1);
}

function CartItem3() {
  return ShoppingCartFactory('car3', 'Ferrari LaFerrari', '1500000', 2);
}

function CartItem4() {
  return ShoppingCartFactory('car4', 'Mclaren Senna', '1250000', 3);
}

function CartItem5() {
  return ShoppingCartFactory('car5', 'Mclaren F1', '1500000', 4);
}

function CartItem6() {
  return ShoppingCartFactory('car6', 'Mclaren P1', '1000000', 5);
}

function CartItem7() {
  return ShoppingCartFactory('car7', 'Lamborghini Sian', '1500000', 6);
}

function CartItem8() {
  return ShoppingCartFactory('car8', 'Lamborghini Huracan', '1000000', 7);
}

function CartItem9() {
  return ShoppingCartFactory('car9', 'Lamborghini Aventador', '1250000', 8);
}

function CartItem10() {
  return ShoppingCartFactory('car10', 'DBS Superleggera', '1500000', 9);
}

function CartItem11() {
  return ShoppingCartFactory('car11', 'Valkyrie', '1800000', 10);
}

function CartItem12() {
  return ShoppingCartFactory('car12', 'Victor', '1250000', 11);
}

function CartItem13() {
  return ShoppingCartFactory('car13', '718 Cayman GT4 RS', '500000', 12);
}

function CartItem14() {
  return ShoppingCartFactory('car14', '718 Spyder', '450000', 13);
}

function CartItem15() {
  return ShoppingCartFactory('car15', '911 Turbo S', '1000000', 14);
}

function CartItem16() {
  return ShoppingCartFactory('car16', 'AMG GT R', '250000', 15);
}

function CartItem17() {
  return ShoppingCartFactory('car17', 'AMG SL Roadster', '150000', 16);
}

function CartItem18() {
  return ShoppingCartFactory('car18', 'Project One', '2000000', 17);
}

export {
  CartItem1,
  CartItem2,
  CartItem3,
  CartItem4,
  CartItem5,
  CartItem6,
  CartItem7,
  CartItem8,
  CartItem9,
  CartItem10,
  CartItem11,
  CartItem12,
  CartItem13,
  CartItem14,
  CartItem15,
  CartItem16,
  CartItem17,
  CartItem18,
};
