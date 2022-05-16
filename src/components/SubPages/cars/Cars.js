import CarFactory from './CarFactory';
import ferrariLogo from '../../../images/icons/whiteBGIcons/FerrariLogoWhite.svg';
import mclarenLogo from '../../../images/icons/whiteBGIcons/mclarenTick.png';
import lamboLogo from '../../../images/icons/whiteBGIcons/lamborghini.svg';
import astonLogo from '../../../images/icons/whiteBGIcons/aston-martin.svg';
import porscheLogo from '../../../images/icons/whiteBGIcons/Porschelogo.svg';
import mercedesLogo from '../../../images/icons/whiteBGIcons/mercedes-benz.svg';
import carImages from '../../cars';
import '../../../styles/CarFactory.css';

function Car1() {
  return CarFactory(
    'car1',
    'Ferrari F40',
    ferrariLogo,
    'ferrariLogo',
    carImages[0],
    '1250000',
    '471 hp',
    '0-100 kph 4.2 seconds',
    'ferrariRed'
  );
}

function Car2() {
  return CarFactory(
    'car2',
    'Ferrari Enzo',
    ferrariLogo,
    'ferrariLogo',
    carImages[1],
    '1000000',
    '651 hp',
    '0-100 kph 3.6 seconds',
    'ferrariRed'
  );
}

function Car3() {
  return CarFactory(
    'car3',
    'Ferrari LaFerrari',
    ferrariLogo,
    'ferrariLogo',
    carImages[2],
    '1500000',
    '950 hp',
    '0-100 kph 2.5 seconds',
    'ferrariRed'
  );
}

function Car4() {
  return CarFactory(
    'car4',
    'Mclaren Senna',
    mclarenLogo,
    'mclarenLogo',
    carImages[3],
    '1250000',
    '789 hp',
    '0-100 kph 2.8 seconds',
    'mclarenOrange'
  );
}

function Car5() {
  return CarFactory(
    'car5',
    'Mclaren F1',
    mclarenLogo,
    'mclarenLogo',
    carImages[4],
    '1500000',
    '950 hp',
    '0-100 kph 2.5 seconds',
    'mclarenOrange'
  );
}

function Car6() {
  return CarFactory(
    'car6',
    'Mclaren P1',
    mclarenLogo,
    'mclarenLogo',
    carImages[5],
    '1000000',
    '651 hp',
    '0-100 kph 3.6 seconds',
    'mclarenOrange'
  );
}

function Car7() {
  return CarFactory(
    'car7',
    'Sian',
    lamboLogo,
    'lamboLogo',
    carImages[6],
    '1500000',
    '807 hp',
    '0-100 kph 2.8 seconds',
    'lamboGold'
  );
}

function Car8() {
  return CarFactory(
    'car8',
    'Huracan',
    lamboLogo,
    'lamboLogo',
    carImages[7],
    '1000000',
    '640 hp',
    '0-100 kph 2.9 seconds',
    'lamboGold'
  );
}

function Car9() {
  return CarFactory(
    'car9',
    'Aventador',
    lamboLogo,
    'lamboLogo',
    carImages[8],
    '1250000',
    '770 hp',
    '0-100 kph 2.8 seconds',
    'lamboGold'
  );
}

function Car10() {
  return CarFactory(
    'car10',
    'DBS Superleggera',
    astonLogo,
    'astonLogo',
    carImages[9],
    '1500000',
    '715 hp',
    '0-100 kph 2.8 seconds',
    'astonGreen'
  );
}

function Car11() {
  return CarFactory(
    'car11',
    'Valkyrie',
    astonLogo,
    'astonLogo',
    carImages[10],
    '1800000',
    '1116 hp',
    '0-100 kph 2.5 seconds',
    'astonGreen'
  );
}

function Car12() {
  return CarFactory(
    'car12',
    'Victor',
    astonLogo,
    'astonLogo',
    carImages[11],
    '1250000',
    '836 hp',
    '0-100 kph 3 seconds',
    'astonGreen'
  );
}

function Car13() {
  return CarFactory(
    'car13',
    '718 Cayman GT4 RS',
    porscheLogo,
    'porscheLogo',
    carImages[12],
    '500000',
    '500 hp',
    '0-100 kph 3.4 seconds',
    'porscheRed'
  );
}

function Car14() {
  return CarFactory(
    'car14',
    '718 Spyder',
    porscheLogo,
    'porscheLogo',
    carImages[13],
    '450000',
    '420 hp',
    '0-100 kph 3.7 seconds',
    'porscheRed'
  );
}

function Car15() {
  return CarFactory(
    'car15',
    '911 Turbo S',
    porscheLogo,
    'porscheLogo',
    carImages[14],
    '1000000',
    '650 hp',
    '0-100 kph 2.7 seconds',
    'porscheRed'
  );
}

function Car16() {
  return CarFactory(
    'car16',
    'AMG GT R',
    mercedesLogo,
    'mercedesLogo',
    carImages[15],
    '250000',
    '585 hp',
    '0-100 kph 3.6 seconds',
    'mercedesSilver'
  );
}

function Car17() {
  return CarFactory(
    'car17',
    'AMG SL Roadster',
    mercedesLogo,
    'mercedesLogo',
    carImages[16],
    '150000',
    '621 hp',
    '0-100 kph 3.7 seconds',
    'mercedesSilver'
  );
}

function Car18() {
  return CarFactory(
    'car18',
    'Project One',
    mercedesLogo,
    'mercedesLogo',
    carImages[17],
    '2000000',
    '1000 hp',
    '0-100 kph 2.2 seconds',
    'mercedesSilver'
  );
}

export {
  Car1,
  Car2,
  Car3,
  Car4,
  Car5,
  Car6,
  Car7,
  Car8,
  Car9,
  Car10,
  Car11,
  Car12,
  Car13,
  Car14,
  Car15,
  Car16,
  Car17,
  Car18,
};
