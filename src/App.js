//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import { Route, Routes} from 'react-router-dom';
import { Personajes } from './Pages/Personajes';
import { DPersonaje } from './Pages/DPersonaje';
import { Planetas } from './Pages/Planetas';
import NavbarApp from './components/NavBarApp/index';


function App() {
  
  return (
    <div className="App">
      
      <NavbarApp />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/personajes' element={<Personajes/>} />
        <Route path='/DPersonaje' element={<DPersonaje/>} />
        <Route path='/planetas' element={<Planetas/>} />
      </Routes>
    </div>
    
  );
}


export default App;
