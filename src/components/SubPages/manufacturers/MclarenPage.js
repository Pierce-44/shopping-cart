import { Link } from 'react-router-dom';
import lamborghiniLogo from '../../../images/icons/whiteBGIcons/lamborghini.svg';
import mercedesLogo from '../../../images/icons/whiteBGIcons/mercedes-benz.svg';
import porscheLogo from '../../../images/icons/whiteBGIcons/Porschelogo.svg';
import ferrariLogo from '../../../images/icons/whiteBGIcons/FerrariLogo.svg';
import mclarenLogoBlackTxt from '../../../images/icons/mclarenBlackTxt.svg';
import astonLogo from '../../../images/icons/whiteBGIcons/aston-martin.svg';
import cars from '../../cars';
import Header from '../../Header';
import Subscribe from '../../Subscribe';
import Footer from '../../Footer';
import '../../../styles/MclarenPage.css';

function MclarenPage() {
  return (
    <div>
      <Header />
      <div className="fillerDiv" />
      <div className="manufacturerPageMain">
        <div className="manufacturerPageSubHeading">
          <img
            id="mclarenHeader"
            src={mclarenLogoBlackTxt}
            alt="Ferrari Logo"
          />
        </div>
        <div className="manufacturerPageContainer">
          <div className="manufacturerSideTab">
            <p className="manufacturerTitle">MCLAREN</p>
            <div className="manufacturerSideTabDiv">
              <div className="manufacturerSideDiv">
                <Link to="/AllCars" className="link">
                  <p className="allCarsHighLight">ALL CARS</p>
                </Link>
                <Link to="/AllCars/FerrariPage" className="link">
                  <p className="ferrariHighLight">Ferrari</p>
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
                <img src={ferrariLogo} alt="Ferrari" />
                <img src={lamborghiniLogo} alt="Lamborghini" />
                <img src={astonLogo} alt="Aston Martin" />
                <img src={porscheLogo} alt="Porsche" />
                <img src={mercedesLogo} alt="Mercedes" />
              </div>
            </div>
          </div>
          <div className="manufacturerPageCars">
            <Link to="/car6" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[5]} alt="P1" />
                <div className="mclarenPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Mclaren P1</p>
                  <p className="manufacturerStatsText">651 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 3.6 seconds</p>
                  <p className="price">£ 1,000,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car5" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[4]} alt="F1" />
                <div className="mclarenPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Mclaren F1</p>
                  <p className="manufacturerStatsText">950 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 2.5 seconds</p>
                  <p className="price">£ 1,500,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car4" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[3]} alt="Senna" />
                <div className="mclarenPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Mclaren Senna</p>
                  <p className="manufacturerStatsText">789 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 2.8 seconds</p>
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

export default MclarenPage;
