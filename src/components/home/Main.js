import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';


const Main = () => {
    return(
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg={12} md={6} xs={12} className="text-center">
                    <img
                        width={250}
                        height={250}
                        className="img-fluid mx-auto d-block text-center"
                        src="logo.jpg"
                        alt="Pequeñas tienditas"
                    />
                    <h1 className="text-white font-weight-light">#Consumelocal</h1>
                    <a href="https://www.facebook.com/Peque%C3%B1as-Tienditas-102759398165199" className="text-decoration-none">                          
                    <img
                        width={48}
                        height={48}
                        className="img-fluid mx-auto text-center"
                        src="https://img.icons8.com/color/48/000000/facebook-circled.png"
                        alt="Logo de facebook"
                    />                        
                        <p className="text-white text-center">facebook</p>                      
                    </a>
                </Col>                                                                  
            </Row>            
            <Row className="justify-content-center mt-5">
                <Col className="mt-5">
                    <ControlledCarousel/>                                                    
                </Col>
            </Row>                                            
        </Container>        
    );
}

export default Main;


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            width={500}
            height={500}
            className="d-block w-100"
            src={require('../../assets/images/1.jpg')}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={500}
            height={500}
            className="d-block w-100"
            src={require('../../assets/images/2.jpg')}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={500}
            height={500}
            className="d-block w-100"
            src={require('../../assets/images/3.jpg')}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
    