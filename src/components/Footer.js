import React from 'react';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return(    
        <Container className="footer-bg text-center" fluid>
            <Row>        
                <Col lg={12} md={12} xs={12} className="text-center mt-3">
                    <p>                        
                        &copy;{new Date().getFullYear()} Marcos Gómez - Todos los derechos reservados.
                    </p>                    
                </Col>
            </Row>
        </Container>                 
    );
}

export default Footer;