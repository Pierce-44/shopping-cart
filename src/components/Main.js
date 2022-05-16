/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import '../styles/Main.css';
import { Link } from 'react-router-dom';
import MainCarousel from './MainCarousel';
import arrow from '../images/arrowDown.svg';

const Main = () => (
  <div>
    <div className="mainContainerOne">
      <div />
      <div className="mainTitleContainer">
        <h1>Discover your dream car</h1>
        <div className="shopMainBtn">
          <Link to="AllCars" className="link">
            <p>SHOP</p>
          </Link>
        </div>
      </div>
      <div className="scrollDownArrow">
        <div className="scrollDownAnimation1">
          <img src={arrow} alt="arrow down" />
        </div>
        <div className="scrollDownAnimation2">
          <img src={arrow} alt="arrow down" />
        </div>
      </div>
    </div>
    <div className="mainContainerTwo">
      <p>FILLER</p>
    </div>
    <div className="mainContainerThree">
      <p className="carouselTitle">The Classic Ferrari F40</p>
      <MainCarousel />
      <Link to="/car1" className="f40ShopLink">
        <div className="shopButtonCarousel">
          <p>SHOP</p>
        </div>
      </Link>
    </div>
  </div>
);

export default Main;
