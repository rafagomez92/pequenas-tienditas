import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Tienditas(props) {
    const { name, owner, img } = props;
    
    return (
        <div className="d-flex justify-content-center col-sm-6 mt-5 mb-5 col-xs-12">
            <Card className="rounded-0" style={{ width: '25rem' }} >
                <Card.Img variant="top" src={img} style={{"padding": "20px"}} />
                <Card.Body className="text-center">
                    <Card.Title>{owner}</Card.Title>
                    <Card.Text className="text-muted">
                    {name}
                    </Card.Text>
                    <Button style={{"background":"#F6537A"}}>Ver</Button>
                </Card.Body>
            </Card>
        </div>                                                                     
    )
}

export default Tienditas;


