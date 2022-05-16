import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useMemo } from 'react';
import App from './App';
import AllCarsPage from './components/SubPages/AllCarsPage';
import FerrariPage from './components/SubPages/manufacturers/FerrariPage';
import MclarenPage from './components/SubPages/manufacturers/MclarenPage';
import LamboPage from './components/SubPages/manufacturers/LamboPage';
import AstonPage from './components/SubPages/manufacturers/AstonPage';
import PorschePage from './components/SubPages/manufacturers/PorschePage';
import MercedesPage from './components/SubPages/manufacturers/MercedesPage';
import * as CARS from './components/SubPages/cars/Cars';
import ScrollToTop from './ScrollToTop';
import { CartItemDisplay, CarItemCount } from './CartItemDisplay';
import dataProps from './Context';

const RouteSwitch = () => {
  const [count, setCount] = useState(0);
  const [priceCount, setPriceCount] = useState(0);
  const [ItemDisplay, setItemDisaply] = useState(CartItemDisplay);
  const [CarCount, setCarCount] = useState(CarItemCount);
  const [displayShoppingCart, setDisplayShoppingCart] =
    useState('hideShoppingCart');

  const handleOpenCart = () => {
    setDisplayShoppingCart('displayShoppingCart');
    document.body.style.overflow = 'hidden';
  };

  const handleCount = (e) => {
    const number = CarCount[e.target.id];
    setCount(count + 1);
    setCarCount({
      ...CarCount,
      [e.target.id]: number + 1,
    });
  };

  const handlePriceCount = (e) => {
    const value = e.target.dataset.price;

    setPriceCount(Number(priceCount) + Number(value));
  };

  const handleCloseCart = () => {
    setDisplayShoppingCart('hideShoppingCart');
    document.body.style.overflow = 'initial';
  };

  const handleItemDisplay = (e) => {
    handleCount(e);
    setItemDisaply({
      ...ItemDisplay,
      [e.target.id]: 'displayCartItem',
    });
  };

  const handleItemRemove = (e) => {
    const number = CarCount[e.target.id];
    const value = e.target.dataset.price;

    setCount(count - 1);
    setCarCount({
      ...CarCount,
      [e.target.id]: number - 1,
    });
    setPriceCount(Number(priceCount) - Number(value));

    if (CarCount[e.target.id] === 1) {
      setItemDisaply({
        ...ItemDisplay,
        [e.target.id]: 'hiddenCartItem',
      });
    }
  };

  const dataPropsContainer = useMemo(() => ({
    count,
    CarCount,
    priceCount,
    ItemDisplay,
    displayShoppingCart,
    handleOpenCart,
    handleCloseCart,
    handleItemDisplay,
    handleItemRemove,
    handleCount,
    handlePriceCount,
  }));

  return (
    <BrowserRouter basename="/shopping-cart">
      <ScrollToTop>
        <dataProps.Provider value={dataPropsContainer}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/AllCars" element={<AllCarsPage />} />
            <Route path="/AllCars/FerrariPage" element={<FerrariPage />} />
            <Route path="/AllCars/MclarenPage" element={<MclarenPage />} />
            <Route path="/AllCars/LamboPage" element={<LamboPage />} />
            <Route path="/AllCars/AstonPage" element={<AstonPage />} />
            <Route path="/AllCars/PorschePage" element={<PorschePage />} />
            <Route path="/AllCars/MercedesPage" element={<MercedesPage />} />
            <Route path="/Car1" element={<CARS.Car1 />} />
            <Route path="/Car2" element={<CARS.Car2 />} />
            <Route path="/Car3" element={<CARS.Car3 />} />
            <Route path="/Car4" element={<CARS.Car4 />} />
            <Route path="/Car5" element={<CARS.Car5 />} />
            <Route path="/Car6" element={<CARS.Car6 />} />
            <Route path="/Car7" element={<CARS.Car7 />} />
            <Route path="/Car8" element={<CARS.Car8 />} />
            <Route path="/Car9" element={<CARS.Car9 />} />
            <Route path="/Car10" element={<CARS.Car10 />} />
            <Route path="/Car11" element={<CARS.Car11 />} />
            <Route path="/Car12" element={<CARS.Car12 />} />
            <Route path="/Car13" element={<CARS.Car13 />} />
            <Route path="/Car14" element={<CARS.Car14 />} />
            <Route path="/Car15" element={<CARS.Car15 />} />
            <Route path="/Car16" element={<CARS.Car16 />} />
            <Route path="/Car17" element={<CARS.Car17 />} />
            <Route path="/Car18" element={<CARS.Car18 />} />
          </Routes>
        </dataProps.Provider>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default RouteSwitch;
