import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ReactComponent as Location } from '../../assets/svg/current.svg';

function Contacto() {        
    return (         
        <Container>            
        <Row className="justify-content-center mt-5">            
            <Col lg={6} md={6} xs={12} className="text-center mb-5">
                <Card className="shadow-sm p-3 bg-white rounded-0 mt-5">
                    <Col>
                <h1 className="font-weight-light">Contáctanos</h1>                          
                <Location className="text-center" style={{width:"40%", height:"10%"}} />
                    {/* <img
                        width={200}
                        height={200}
                        className="shadow-sm p-3 bg-white rounded-0 img-fluid mx-auto d-block text-center mt-4"
                        src="logo.jpg"
                        alt="Pequeñas tienditas"
                    /> */}
                    <h5 className="font-weight-light mt-4">Siguenos a través de facebook</h5>                
                    <a href="https://www.facebook.com/Peque%C3%B1as-Tienditas-102759398165199" className="text-decoration-none">                          
                        <img
                            width={28}
                            height={28}
                            className="img-fluid mx-auto text-center"
                            src="https://img.icons8.com/color/48/000000/facebook-circled.png"
                            alt="Logo de facebook"
                            />                        
                            <p className="text-dark text-center">facebook.com/pequeñas-tienditas</p>                      
                        </a>
                </Col>
                <Col>
                    <h5 className="font-weight-light">Número telefónico</h5>                
                    <p className="text-center text-dark">9612325544</p>                      
                </Col>
                </Card>
            </Col>                                   
        </Row>
    </Container>                       
    )
}

export default Contacto;