import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Contacto() {        
    return (         
        <Container>
        <Row className="justify-content-center mt-5">            
            <Col lg={6} md={6} xs={12} className="text-center mt-5 mb-5">
                <Card>
                    <h1 className="font-weight-light mt-5">Contáctanos</h1>                          
                    <Col>
                    <h5 className="font-weight-light">Siguenos a través de facebook</h5>                
                    <a href="https://www.facebook.com/Peque%C3%B1as-Tienditas-102759398165199" className="text-decoration-none">                          
                        <img
                            width={28}
                            height={28}
                            className="img-fluid mx-auto text-center"
                            src="https://img.icons8.com/color/48/000000/facebook-circled.png"
                            alt="Logo de facebook"
                            />                        
                            <p className="text-primary text-center">Facebook</p>                      
                        </a>
                </Col>
                <Col>
                    <h5 className="font-weight-light">Números telefónicos</h5>                
                    <p className="text-center text-primary">9612325544</p>                      
                </Col>
                </Card>
            </Col>            
            <Col lg={6} md={6} xs={12} className="text-center mb-5">
            <img
                width={350}
                height={350}
                className="img-fluid mx-auto d-block text-center mt-4"
                src="logo.jpg"
                alt="Pequeñas tienditas"
            />
            </Col>            
        </Row>
    </Container>                       
    )
}

export default Contacto;