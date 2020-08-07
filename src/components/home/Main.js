import React, { useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';


const Main = () => {
    return(
        <Container>
            <Row className="justify-content-center align-item-center mt-5">            
                <Col lg={12} md={6} xs={12} className="text-center mb-5">
                    <img
                        width={250}
                        height={250}
                        className="img-fluid mx-auto d-block text-center mt-4"
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
                {/* <div className="mt-5">
                  <ControlledCarousel />                                                                              
                </div>                                                     */}
            <Row className="justify-content-center align-item-center mt-5" style={{maxWidth:"800px"}}>
              <Col className="text-center">
                <ControlledCarousel />                                                                                                                                                  
              </Col>
            </Row>
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
            <Container>
            <img              
              className="d-block w-100 img-fluid"
              src={require('../../assets/images/1.jpg')}
              alt="First slide"
              />
           </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
            <img
              className="d-block w-100 img-fluid"
              src={require('../../assets/images/2.jpg')}
              alt="Second slide"
              />
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
            <img   
              className="d-block w-100 img-fluid"
              src={require('../../assets/images/3.jpg')}
              alt="Third slide"
              />
            </Container>
          </Carousel.Item>
      </Carousel>
    );
  }
    