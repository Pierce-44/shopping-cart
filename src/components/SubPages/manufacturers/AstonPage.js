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
import '../../../styles/AstonPage.css';

function AstonPage() {
  return (
    <div>
      <Header />
      <div className="fillerDiv" />
      <div className="manufacturerPageMain">
        <div className="manufacturerPageSubHeading">
          <h1 className="manufacturerPageTitle">Aston Martin</h1>
          <div className="astonPageLogo">
            <img src={astonLogo} alt="Aston Martin Logo" />
          </div>
        </div>
        <div className="manufacturerPageContainer">
          <div className="manufacturerSideTab">
            <p className="manufacturerTitle">ASTON MARTIN</p>
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
                <img src={mclarenLogo} alt="mclaren" />
                <img src={LamboLogo} alt="Lambo" />
                <img src={porscheLogo} alt="Porsche" />
                <img src={mercedesLogo} alt="Mercedes" />
              </div>
            </div>
          </div>
          <div className="manufacturerPageCars">
            <Link to="/car10" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[9]} alt="DBS Superleggera" />
                <div className="astonPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">DBS Superleggera</p>
                  <p className="manufacturerStatsText">715 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 2.8 seconds</p>
                  <p className="price">£ 1,500,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car11" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[10]} alt="Valkyrie" />
                <div className="astonPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Valkyrie</p>
                  <p className="manufacturerStatsText">1,160 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 2.5 seconds</p>
                  <p className="price">£ 1,800,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car12" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[11]} alt="Victor" />
                <div className="astonPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Victor</p>
                  <p className="manufacturerStatsText">836 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 3 seconds</p>
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

export default AstonPage;
