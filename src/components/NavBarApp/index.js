import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo2 from '../assets/img/Logo2.png';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function NavbarApp() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo2}
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link href="#">Star Wars</Nav.Link> 

            <Link className='nav-link' to="/personajes">Personajes</Link>
            
            <Nav.Link href="#">Planetas</Nav.Link> 

          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavbarApp;