import React from 'react';

import Data from '../Data';
import Tienditas from '../components/store/Tienditas';

function Tiendas() {

    const stores = Data.map(({name, owner, img, id}) => 
        <Tienditas name={name} owner={owner} img={img} id={id} />
    )
    return (
        <div className="container-fluid bg-gradient">
            <div className="row justify-content-center">
                <div className="col-lg-12 mt-5">
                    <div className="mt-5">                                    
                        <div className="text-center">                                                            
                            <span className="display-4 text-light text-center">
                                #Consumelocal
                            </span>                         
                        </div>                                                                                                                   
                    </div>                                                                                           
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {stores}
                </div>
            </div>        
        </div>
    )
}

export default Tiendas;


