import React from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Data from '../Data';
import Tienditas from '../components/store/Tienditas';

function Tiendas() {

    const stores = Data.map(({name, owner, img, id}) => 
        <Tienditas name={name} owner={owner} img={img} key={id} />
    )
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col lg={12} md={6} xs={12} className="mt-4 text-center">
                    <span className="display-4 text-light text-center">
                        #Consumelocal
                    </span>      
                </Col>
            </Row>
            <Container>
                <Row>
                    {stores}
                </Row>
            </Container>
        </Container>
        // <div className="container-fluid expand">
        //     <div className="row justify-content-center">
        //         <div className="col-lg-12">
        //             <div className="mt-4">                                    
        //                 <div className="text-center">                                                            
        //                     <span className="display-4 text-light text-center">
        //                         #Consumelocal
        //                     </span>                         
        //                 </div>                                                                                                                   
        //             </div>                                                                                           
        //         </div>
        //     </div>
        //     <div className="container">
        //         <div className="row">
        //             {stores}
        //         </div>
        //     </div>        
        // </div>
    )
}

export default Tiendas;


