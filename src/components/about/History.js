import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Card, Container, Row } from 'react-bootstrap';
import { ReactComponent as Online } from '../../assets/svg/onlineShop.svg';

export default function History() {
    return (
        <Container>            
            <Row className="justify-content-center mt-5">
                <Card className="shadow p-3 mb-5 mr-3 ml-3 rounded-0" style={{ width: '35rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">
                        <h1 className="font-weight-light">Pequeñas Tienditas</h1>
                        </Card.Title>                                                
                        <Online className="text-center" style={{width:"100%", height:"35%"}} />
                        {/* <img 
                            width={400}
                            className="img-fluid mx-auto d-block text-center mt-4"
                            src={require('../../assets/images/1.jpg')}
                            alt="pequeñas tienditas" 
                        /> */}
                                <Card.Text className="mt-4 text-justify">
                                    Magna consequat ex Lorem consectetur aliqua 
                                    aliqua eu dolore magna aliqua nostrud Lorem 
                                    fugiat. Est proident consequat aliquip aute 
                                    laboris pariatur magna veniam adipisicing 
                                    voluptate excepteur. Reprehenderit voluptate 
                                    est sint id veniam ad do sit irure quis 
                                    deserunt. Aliqua excepteur dolore aliquip.
                                </Card.Text>
                    </Card.Body>
                </Card>            
            </Row>
        </Container>

           
        
    )
}
