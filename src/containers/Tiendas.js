import React from 'react';
import '../App.css';

import Data from '../Data';
import Tienditas from '../components/store/Tienditas';

function Tiendas() {

    const stores = Data.map(({name, owner, img, id}) => 
        <Tienditas name={name} owner={owner} img={img} key={id} />
    )
    return (
        <div className="container-fluid expand" style={{"backgroundImage": "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"}}>
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


