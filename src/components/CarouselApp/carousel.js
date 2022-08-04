import Carousel from 'react-bootstrap/Carousel';
import Uncharted from '../assets/img/Uncharted.jpg';
import TombRaider from '../assets/img/TombRaider.jpg';
import Origins from '../assets/img/Origins.jpg';
import starwars1 from '../assets/img/StarWars1.jpg';
import starwars2 from '../assets/img/StarWars2.jpg';
import starwars3 from '../assets/img/starwars3.jpg';


function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className='container-carousel'>
        <img className="d-block w-100" src={starwars1}  alt="First slide"/>
        </div>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className='container-carousel'>
        <img
          className="d-block w-100"
          src={starwars2}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
      <div className='container-carousel'>
        <img
          className="d-block w-100"
          src={starwars3}
          alt="Third slide"
        />
        </div>
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;