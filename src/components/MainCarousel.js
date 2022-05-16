import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import F40Img1 from '../images/F40/F40_1.jpg';
import F40Img2 from '../images/F40/F40_2.jpg';
import F40Img3 from '../images/F40/F40_3.jpg';
import F40Img4 from '../images/F40/F40_4.jpg';

const MainCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop={3000}
    interval={3000}
    stopOnHover={false}
    // width="50vw"
    showStatus={false}
  >
    <div>
      <img src={F40Img1} alt="F40" />
    </div>
    <div>
      <img src={F40Img2} alt="F40" />
    </div>
    <div>
      <img src={F40Img3} alt="F40" />
    </div>
    <div>
      <img src={F40Img4} alt="F40" />
    </div>
  </Carousel>
);

export default MainCarousel;
