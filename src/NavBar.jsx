import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './FiveAccordions.css';






const NavBar = () => {
    return(
              
    <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/Servicios">Servicios</Navbar.Brand>
        <Navbar.Brand href="/Mercadolibre">Mercadolibre</Navbar.Brand>
        <Navbar.Brand href="/Clientes">Clientes</Navbar.Brand>
        <Navbar.Brand href="/Contacto">Contacto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
      )

}

export default NavBar

