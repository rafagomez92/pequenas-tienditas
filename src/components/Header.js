import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return(
      // <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" style={{"backgroundColor": "#F6537A"}}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Pequeñas Tienditas
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">          
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" className="text-light">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-light">Nosotros</Nav.Link>
              <Nav.Link as={Link} to="/stores" className="text-light">Tienditas</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-light">Contactos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>        
    );
}

export default Header;