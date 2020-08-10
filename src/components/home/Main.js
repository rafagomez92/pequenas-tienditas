import React, { useState } from 'react';
import { Container, Row, Col, Button, Carousel, Card } from 'react-bootstrap';
import { ReactComponent as Order } from '../../assets/svg/order.svg';
import { ReactComponent as Feed } from '../../assets/svg/feed.svg';
import { ReactComponent as Shop } from '../../assets/svg/shopping.svg';


const Main = () => {
    return(
        <Container>
            <Row className="justify-content-center align-item-center mt-5">                            
                <Card className="rounded-0 text-center mr-3 ml-3" style={{width: "25rem"}}>
                      <img
                        width={350}
                        height={350}
                        className="img-fluid mx-auto d-block mt-4 mb-4 img-card"
                        src="logo.jpg"
                        alt="Pequeñas tienditas"
                      />
                    <h1 className="font-weight-light">#consumelocal</h1>
                    <a href="https://www.facebook.com/Peque%C3%B1as-Tienditas-102759398165199" className="text-decoration-none">                                                                   
                        <img
                            width={48}
                            height={48}
                            className="img-fluid mx-auto text-center"
                            src="https://img.icons8.com/color/48/000000/facebook-circled.png"
                            alt="Logo de facebook"
                            />                        
                        <p className="text-center text-dark">facebook</p>                                              
                    </a>
                </Card>
                            
            <Row className="justify-content-center mt-5">          
            <Col lg={12} md={12} xs={12} className="text-center">              
              <h1 className="font-weight-normal display-4" style={{color:"#f6537a"}}>Encuentra lo que necesitas</h1>
            </Col>
            <Row>
            <Col lg={4} md={4} xs={4} className="text-center">
              <Feed style={{width: "50%", height:"100%"}}/>
            </Col>            
            <Col lg={4} md={4} xs={4} className="text-center">
              <Order style={{width: "50%", height:"100%"}}/>                                
            </Col>
            <Col lg={4} md={4} xs={4} className="text-center">
              <Shop style={{width: "50%", height:"100%"}}/>                                
            </Col>
            </Row>
            <Col lg={12} md={12} xs={12} className="mt-3 text-center">
              <h5 className="">Podrás encontrar diferentes marcas</h5>
              <Button className="btn-danger" style={{background:"#f6537a"}}>Ver</Button>                
            </Col>
            </Row>

            <Row className="justify-content-center align-item-center mt-5 carousel-img">
              <Col className="text-center">
                <h1 className="font-weight-normal display-4" style={{color:"#f6537a"}}>Descubre</h1>                
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
          <Carousel.Item>
            <Container>
            <img   
              className="d-block w-100 img-fluid"
              src={require('../../assets/images/4.jpg')}
              alt="Fourth slide"
              />
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
            <img   
              className="d-block w-100 img-fluid"
              src={require('../../assets/images/5.jpg')}
              alt="Fifth slide"
              />
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
            <img   
              className="d-block w-100 img-fluid"
              src={require('../../assets/images/6.jpg')}
              alt="Sixth slide"
              />
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
            <a href="stores">
              <img   
              className="d-block w-100 img-fluid"
              src={require('../../assets/images/7.jpg')}
              alt="Seventh slide"
              />
              </a>
            </Container>
          </Carousel.Item>
      </Carousel>
    );
  }
    