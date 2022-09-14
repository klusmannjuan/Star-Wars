//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Personajes } from './Pages/Personajes';
import { DPersonaje } from './components/details/DPersonaje';
import { Planetas } from './Pages/Planetas';
import NavbarApp from './components/NavBarApp/index';
import Footer from './components/Footer/Footer';
import { DPlanetas } from './components/details/DPlanetas';



function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavbarApp />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/personajes' element={<Personajes/>} />
        <Route path='/details/:linkname/:num' element={<DPersonaje/>} />
        <Route path='/planetas' element={<Planetas/>} />
        <Route path='/detailsDP/:linkname/:num' element={<DPlanetas/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    
  );
}


export default App;
