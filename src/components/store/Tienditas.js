import React from 'react';
import '../../App.css';

function Tienditas(props) {
    const { name, owner, img } = props;
    
    return (                    
                    <div className="d-flex justify-content-center col-sm-6 mt-5 mb-5 col-xs-12">
                        <div className="card" style={{"width": "18rem"}}>
                            <img src={img} className="card-img-top shadow" alt="..." style={{"padding": "20px"}} />
                            <div className="card-body text-center">
                                <h5 class="card-title">{owner}</h5>
                                <h6 class="card-subtitle mb-3 text-muted">{name}</h6>                                
                                <button className="btn text-light" style={{"backgroundColor":"#FF859F"}}>Ver</button>
                            </div>
                        </div>
                    </div>                    
            
    )
}

export default Tienditas;


