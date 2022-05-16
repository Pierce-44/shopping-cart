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
import '../../../styles/PorschePage.css';

function PorschePage() {
  return (
    <div>
      <Header />
      <div className="fillerDiv" />
      <div className="manufacturerPageMain">
        <div className="manufacturerPageSubHeading">
          <h1 className="manufacturerPageTitle">Porsche</h1>
          <img src={porscheLogo} alt="Porsche Logo" />
        </div>
        <div className="manufacturerPageContainer">
          <div className="manufacturerSideTab">
            <p className="manufacturerTitle">PORSCHE</p>
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
                <Link to="/AllCars/MercedesPage" className="link">
                  <p className="mercedesHighLight">Mercedes</p>
                </Link>
              </div>
              <div className="manufactuererIconsSideDiv">
                <div className="fillerSideImg" />
                <img src={ferrariLogo} alt="Ferrari" />
                <img src={mclarenLogo} alt="mclaren" />
                <img src={LamboLogo} alt="Lambo" />
                <img src={astonLogo} alt="Aston Martin" />
                <img src={mercedesLogo} alt="Mercedes" />
              </div>
            </div>
          </div>
          <div className="manufacturerPageCars">
            <Link to="/car13" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[12]} alt="DBS Superleggera" />
                <div className="porschePageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">718 Cayman GT4 RS</p>
                  <p className="manufacturerStatsText">500 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 3.4 seconds</p>
                  <p className="price">£ 500,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car15" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[14]} alt="Valkyrie" />
                <div className="porschePageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle"> 911 Turbo S</p>
                  <p className="manufacturerStatsText">650 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 2.7 seconds</p>
                  <p className="price">£ 1,000,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car14" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[13]} alt="Victor" />
                <div className="porschePageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">718 Spyder</p>
                  <p className="manufacturerStatsText">420 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 3.7 seconds</p>
                  <p className="price">£ 450,000</p>
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

export default PorschePage;
