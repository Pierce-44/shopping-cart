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
import '../../../styles/LamboPage.css';

function LamboPage() {
  return (
    <div>
      <Header />
      <div className="fillerDiv" />
      <div className="manufacturerPageMain">
        <div className="manufacturerPageSubHeading">
          <h1 className="manufacturerPageTitle">Lamborghini</h1>
          <img src={LamboLogo} alt="Lamborghini Logo" />
        </div>
        <div className="manufacturerPageContainer">
          <div className="manufacturerSideTab">
            <p className="manufacturerTitle">LAMBORGHINI</p>
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
                <img src={mclarenLogo} alt="mclaren" />
                <img src={astonLogo} alt="Aston Martin" />
                <img src={porscheLogo} alt="Porsche" />
                <img src={mercedesLogo} alt="Mercedes" />
              </div>
            </div>
          </div>
          <div className="manufacturerPageCars">
            <Link to="/car7" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[6]} alt="Enzo" />
                <div className="lamboPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Sian</p>
                  <p className="manufacturerStatsText">807 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 2.8 seconds</p>
                  <p className="price">£ 1,500,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car8" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[7]} alt="LaFerrari" />
                <div className="lamboPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Huracan</p>
                  <p className="manufacturerStatsText">640 hp</p>
                  <p className="manufacturerStatsText">0-100 kph 2.9 seconds</p>
                  <p className="price">£ 1,000,000</p>
                </div>
              </div>
            </Link>
            <Link to="/car9" className="link">
              <div className="manufacturerPageCarsDivs">
                <img src={cars[8]} alt="F40" />
                <div className="lamboPageCarStats manufacturerPageCarStats">
                  <p className="manufacturerStatsCarTitle">Aventador</p>
                  <p className="manufacturerStatsText">770 hp</p>
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

export default LamboPage;
