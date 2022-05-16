import { Link } from 'react-router-dom';
import lamborghiniLogo from '../../../images/icons/whiteBGIcons/lamborghini.svg';
import mercedesLogo from '../../../images/icons/whiteBGIcons/mercedes-benz.svg';
import porscheLogo from '../../../images/icons/whiteBGIcons/Porschelogo.svg';
import mclarenLogo from '../../../images/icons/whiteBGIcons/mclarenTick.png';
import astonLogo from '../../../images/icons/whiteBGIcons/aston-martin.svg';
import FerrariLogo from '../../../images/icons/whiteBGIcons/FerrariLogoWhite.svg';
import cars from '../../cars';
import Header from '../../Header';
import Subscribe from '../../Subscribe';
import Footer from '../../Footer';
import '../../../styles/FerrariPage.css';

function FerrariPage() {
  return (
    <div>
      <Header />
      <div className="fillerDiv" />
      <div className="manufacturerPageMain">
        <div className="manufacturerPageSubHeading">
          <h1 className="manufacturerPageTitle">Ferrari</h1>
          <img src={FerrariLogo} alt="Ferrari Logo" />
        </div>
        <div className="manufacturerPageContainer">
          <div className="manufacturerSideTab">
            <p className="manufacturerTitle">FERRARI</p>
            <div className="manufacturerSideTabDiv">
              <div className="manufacturerSideDiv">
                <Link to="/AllCars" className="link">
                  <p className="allCarsHighLight">ALL CARS</p>
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
              <div className="manufactuererIconsSideDiv">
                <div className="fillerSideImg" />
                <img src={mclarenLogo} alt="mclaren" />
                <img src={lamborghiniLogo} alt="Lamborghini" />
                <img src={astonLogo} alt="Aston Martin" />
                <img src={porscheLogo} alt="Porsche" />
                <img src={mercedesLogo} alt="Mercedes" />
              </div>
            </div>
          </div>
          <div className="manufacturerPageCars">
            <Link to="/car2" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[1]} alt="Enzo" />
                <div className="ferrariPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Ferrari Enzo</p>
                  <p className="manufacturerStatsText">651 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 3.6 seconds</p>
                  <p className="price">£ 1,000,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car3" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[2]} alt="LaFerrari" />
                <div className="ferrariPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Ferrari LaFerrari</p>
                  <p className="manufacturerStatsText">950 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 2.5 seconds</p>
                  <p className="price">£ 1,500,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car1" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[0]} alt="F40" />
                <div className="ferrariPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Ferrari F40</p>
                  <p className="manufacturerStatsText">471 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 4.2 seconds</p>
                  <p className="price">£ 1,250,000</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default FerrariPage;
