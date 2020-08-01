import React from 'react';
import './style.css';

const Main = () => {
    return(
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-lg-12 mt-5">
                    <div className="mt-5">                                    
                        <img src="logo.jpg" className="img-fluid rounded mx-auto d-block" width="250px" height="250px" alt="negocio" />                                                  
                    </div>                                                                                           
                    <div className="text-center">                                                            
                        <span className="display-4 text-light text-center">
                            #Consumelocal
                        </span> 
                        <br />
                        <br />
                        <a href="https://www.facebook.com/Peque%C3%B1as-Tienditas-102759398165199">                          
                            <img src="https://img.icons8.com/color/48/000000/facebook-circled.png" alt="logo de facebook"/>                            
                            <p className="text-white">facebook</p>                      
                        </a>
                    </div>                                                                                           
                </div>
            </div>            
        </div>
    );
}

export default Main;