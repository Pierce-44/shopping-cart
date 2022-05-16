import { Link } from 'react-router-dom';
import Header from '../Header';
import Subscribe from '../Subscribe';
import Footer from '../Footer';
import ferrariLogo from '../../images/icons/whiteBGIcons/FerrariLogo.svg';
import lamborghiniLogo from '../../images/icons/whiteBGIcons/lamborghini.svg';
import mercedesLogo from '../../images/icons/whiteBGIcons/mercedes-benz.svg';
import porscheLogo from '../../images/icons/whiteBGIcons/Porschelogo.svg';
import mclarenLogo from '../../images/icons/whiteBGIcons/mclarenTick.png';
import astonLogo from '../../images/icons/whiteBGIcons/aston-martin.svg';
import cars from '../cars';
import '../../styles/AllCarsMain.css';

function AllCarsPage() {
  return (
    <div>
      <Header />
      <div className="fillerDiv" />
      <div className="allCarsMain">
        <div className="allCarsSideTab">
          <p className="allCarsTitle">ALL CARS</p>
          <div className="allCarsSideTabDiv">
            <div className="carNamesSideDiv">
              <Link to="FerrariPage" className="link">
                <p className="ferrariHighLight">Ferrari</p>
              </Link>
              <Link to="MclarenPage" className="link">
                <p className="mclarenHighLight">Mclaren</p>
              </Link>
              <Link to="LamboPage" className="link">
                <p className="lamboHighLight">Lamborghini</p>
              </Link>
              <Link to="AstonPage" className="link">
                <p className="astonHighLight">Aston Martin</p>
              </Link>
              <Link to="PorschePage" className="link">
                <p className="porscheHighLight">Porsche</p>
              </Link>
              <Link to="MercedesPage" className="link">
                <p className="mercedesHighLight">Mercedes</p>
              </Link>
            </div>
            <div className="carIconsSideDiv">
              <img src={ferrariLogo} alt="ferrari" />
              <img src={mclarenLogo} alt="mclaren" />
              <img src={lamborghiniLogo} alt="Lamborghini" />
              <img src={astonLogo} alt="Aston Martin" />
              <img src={porscheLogo} alt="Porsche" />
              <img src={mercedesLogo} alt="Mercedes" />
            </div>
          </div>
        </div>
        <div className="allCarsSubContainer">
          <div className="allCarsDiv">
            <div>
              <p>DBS Superleggera</p>
              <Link to="/car10">
                <img
                  className="allCarImages"
                  src={cars[9]}
                  alt="DBS Superleggera"
                />
              </Link>
            </div>
            <div>
              <p>Victor</p>
              <Link to="/car12">
                <img className="allCarImages" src={cars[11]} alt="Victor" />
              </Link>
            </div>
          </div>
          <div className="allCarsDiv">
            <div>
              <p>AMG GT R</p>
              <Link to="/car16">
                <img className="allCarImages" src={cars[15]} alt="AMG GT R" />
              </Link>
            </div>
            <div>
              <p>Enzo</p>
              <Link to="/car2">
                <img className="allCarImages" src={cars[1]} alt="Enzo" />
              </Link>
            </div>
          </div>
          <div className="allCarsDiv">
            <div>
              <p>718 Cayman GT4 RS</p>
              <Link to="/car13">
                <img
                  className="allCarImages"
                  src={cars[12]}
                  alt="718 Cayman GT4 RS"
                />
              </Link>
            </div>
            <div>
              <p>Sian</p>
              <Link to="/car7">
                <img className="allCarImages" src={cars[6]} alt="Sian" />
              </Link>
            </div>
          </div>
          <div className="allCarsDiv">
            <div>
              <p>Senna</p>
              <Link to="/car4">
                <img className="allCarImages" src={cars[3]} alt="Senna" />
              </Link>
            </div>
            <div>
              <p>Valkyrie</p>
              <Link to="/car11">
                <img className="allCarImages" src={cars[10]} alt="Valkyrie" />
              </Link>
            </div>
          </div>
          <div className="allCarsDiv">
            <div>
              <p>F40</p>
              <Link to="/car1">
                <img className="allCarImages" src={cars[0]} alt="F40" />
              </Link>
            </div>
            <div>
              <p>Project One</p>
              <Link to="/car18">
                <img
                  className="allCarImages"
                  src={cars[17]}
                  alt="Project One"
                />
              </Link>
            </div>
          </div>
          <div className="allCarsDiv">
            <div>
              <p>718 Spyder</p>
              <Link to="/car14">
                <img className="allCarImages" src={cars[13]} alt="718 Spyder" />
              </Link>
            </div>
            <div>
              <p>Aventador</p>
              <Link to="/car9">
                <img className="allCarImages" src={cars[8]} alt="Aventador" />
              </Link>
            </div>
          </div>
          <div className="allCarsDiv">
            <div>
              <p>AMG SL Roadster</p>
              <Link to="/car17">
                <img
                  className="allCarImages"
                  src={cars[16]}
                  alt="AMG SL Roadster"
                />
              </Link>
            </div>
            <div>
              <p>Huracan</p>
              <Link to="/car8">
                <img className="allCarImages" src={cars[7]} alt="Huracan" />
              </Link>
            </div>
          </div>
          <div className="allCarsDiv">
            <div>
              <p>LaFerrari</p>
              <Link to="/car3">
                <img className="allCarImages" src={cars[2]} alt="LaFerrari" />
              </Link>
            </div>
            <div>
              <p>P1</p>
              <Link to="/car6">
                <img className="allCarImages" src={cars[5]} alt="P1" />
              </Link>
            </div>
          </div>
          <div className="allCarsDivBottom">
            <div>
              <p>911 Turbo S</p>
              <Link to="/car15">
                <img
                  className="allCarImages"
                  src={cars[14]}
                  alt="911 Turbo S"
                />
              </Link>
            </div>
            <div>
              <p>F1</p>
              <Link to="/car5">
                <img className="allCarImages" src={cars[4]} alt="F1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default AllCarsPage;
