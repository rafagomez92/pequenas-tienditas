import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm p-3 mb-5" style={{"backgroundColor": "#FF859F"}}>                    
                <div className="container">
                    <Link to="/">                        
                        <img src="logo.jpg" className="mb-2 mr-2" width="40" height="40" alt="logo"/>                        
                        <h3 className="navbar-brand text-light">Pequeñas tienditas</h3>                        
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <Link to="/">
                                <li className="nav-item active">
                                    <h5 className="nav-link text-light">Inicio</h5>
                                </li>
                            </Link>
                            <Link to="/about">                            
                                <li className="nav-item active">
                                    <h5 className="nav-link text-light">Acerca de</h5>
                                </li>
                            </Link>
                            <Link to="/stores">                                
                                <li className="nav-item active">
                                    <h5 className="nav-link text-light">Tienditas</h5>
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li className="nav-item active">
                                    <h5 className="nav-link text-light">Contacto</h5>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;