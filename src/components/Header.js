import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return(
      // <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
        <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" style={{"background": "#F6537A"}}> 
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
              <Link to="/">
                <Nav.Link href="/" className="text-light">Inicio</Nav.Link>
              </Link>
              <Link to="/about">
                <Nav.Link href="#features" className="text-light">Nosotros</Nav.Link>
              </Link>                          
              <Link to="/stores">
                <Nav.Link href="#stores" className="text-light">Tienditas</Nav.Link>
              </Link>                          
              <Link to="/contact">
                <Nav.Link href="#contact" className="text-light">Contacto</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>   
      
    //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Navbar.Brand as={Link} to="/">
    //         <img
    //           alt=""
    //           src="/logo.jpg"
    //           width="30"
    //           height="30"
    //           className="d-inline-block align-top"
    //         />{' '}
    //         Pequeñas Tienditas
    //       </Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="ml-auto">
                                    
    //     </Nav>        
    //   </Navbar.Collapse>
    // </Navbar>
      


    );
}

export default Header;