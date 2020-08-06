import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function History() {
    return (
        <Container>
            <Row className="justify-content-center mt-3">
                <Col lg={12} md={6} xs={12} className="text-center">
                    <img
                        width={500}
                        height={500}
                        className="img-fluid mx-auto d-block text-center"
                        src={require('../../assets/images/1.jpg')}
                        alt="Pequeñas tienditas"
                    />
                    <h1 className="text-white font-weight-light">#Consumelocal</h1>                    
                </Col>                                                                  
            </Row>                                                                
        </Container>        

        // <div className="container-fluid">
        //     <div className="row justify-content-center align-items-center">
        //         <div className="col-lg-12 mt-2">
        //             <div className="mt-5 text-center">                                    
        //                 <h1 className="display-4 card-title text-light">Pequeñas Tienditas </h1>
        //                 <h4 className="mt-2 mb-5 text-light font-italic font-weight-light">Nace con la finalidad de poder ayudar a los negocios locales de Suchiapa</h4>
        //                 <img src="https://i1.wp.com/alertachiapas.com/wp-content/uploads/2019/06/img_6507.jpg?fit=2198%2C1062&ssl=1" width="30%" alt="pequeñas" />
        //             </div>                                                                                           
        //             <div className="text-center mt-5 text-ligth container">                                                                                                            
        //                 <h5 className="text-light font-weight-normal">Dentro de pequeñas tienditas vas a encontrar </h5>
        //                 <p className="text-light">Bolsas de regalo / Moños / Productos de limpieza / Accesorios para damas, caballeros y niños</p>                            
        //             </div>
        //             </div>                                                                                           
        //         </div>
        //     </div>            
        
    )
}
