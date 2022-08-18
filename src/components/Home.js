import "bootstrap/dist/css/bootstrap.css";
import Slider from "./CarouselApp/carousel";
import CardsApp from "./Cards/Tarjetas";
import Texto from "./Texto/Texto";
import Footer from "./Footer/Footer";


function Home() {
  return (
    <div className="Home">

      <Slider />

      <Texto />

      <CardsApp />

      <Footer />
    </div>
  );
}

export default Home;
