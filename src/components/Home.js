import "bootstrap/dist/css/bootstrap.css";
import Slider from "./CarouselApp/carousel";
import CardsApp from "./Cards/Tarjetas";
import Texto from "./Texto/Texto";



function Home() {
  return (
    <div className="Home">

      <Slider />

      <Texto />

      <CardsApp />

      
    </div>
  );
}

export default Home;
