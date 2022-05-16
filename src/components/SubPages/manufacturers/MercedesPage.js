import { Link } from 'react-router-dom';
import ferrariLogo from '../../../images/icons/whiteBGIcons/FerrariLogo.svg';
import mercedesLogo from '../../../images/icons/whiteBGIcons/mercedes-benz.svg';
import porscheLogo from '../../../images/icons/whiteBGIcons/Porschelogo.svg';
import mclarenLogo from '../../../images/icons/whiteBGIcons/mclarenTick.png';
import astonLogo from '../../../images/icons/whiteBGIcons/aston-martin.svg';
import LamboLogo from '../../../images/icons/whiteBGIcons/lamborghini.svg';
import cars from '../../cars';
import Header from '../../Header';
import Subscribe from '../../Subscribe';
import Footer from '../../Footer';
import '../../../styles/MercedesPage.css';

function MercedesPage() {
  return (
    <div>
      <Header />
      <div className="fillerDiv" />
      <div className="manufacturerPageMain">
        <div className="manufacturerPageSubHeading">
          <h1 className="manufacturerPageTitle">Mercedes</h1>
          <img src={mercedesLogo} alt="Mercedes Logo" />
        </div>
        <div className="manufacturerPageContainer">
          <div className="manufacturerSideTab">
            <p className="manufacturerTitle">MERCEDES</p>
            <div className="manufacturerSideTabDiv">
              <div className="manufacturerSideDiv">
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
              </div>
              <div className="manufactuererIconsSideDiv">
                <div className="fillerSideImg" />
                <img src={ferrariLogo} alt="Ferrari" />
                <img src={mclarenLogo} alt="mclaren" />
                <img src={LamboLogo} alt="Lambo" />
                <img src={astonLogo} alt="Aston Martin" />
                <img src={porscheLogo} alt="Mercedes" />
              </div>
            </div>
          </div>
          <div className="manufacturerPageCars">
            <Link to="/car16" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[15]} alt="DBS Superleggera" />
                <div className="mercedesPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">AMG GT R</p>
                  <p className="manufacturerStatsText">585 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 3.6 seconds</p>
                  <p className="price">£ 250,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car18" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[17]} alt="Valkyrie" />
                <div className="mercedesPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Project One</p>
                  <p className="manufacturerStatsText">1000 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 2.2 seconds</p>
                  <p className="price">£ 2,000,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car17" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[16]} alt="Victor" />
                <div className="mercedesPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">AMG SL Roadster</p>
                  <p className="manufacturerStatsText">621 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 3.7 seconds</p>
                  <p className="price">£ 150,000</p>
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

export default MercedesPage;
