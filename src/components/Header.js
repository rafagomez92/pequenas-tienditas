import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">

                    <Link to="/">
                        <div className="d-inline-block align-top">
                            <img src="https://img.icons8.com/color/48/000000/black-jaguar.png" className="mr-2" width="30" height="30" alt="logo"/>                        
                            <p className="navbar-brand">Club Jaguar</p>                        
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <Link to="/">
                                <li className="nav-item active">
                                    <p className="nav-link">Home</p>
                                </li>
                            </Link>
                            <Link to="/about">                            
                                <li className="nav-item active">
                                    <p className="nav-link">About</p>
                                </li>
                            </Link>
                            <Link to="/projects">                                
                                <li className="nav-item active">
                                    <p className="nav-link">Projects</p>
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li className="nav-item active">
                                    <p className="nav-link">Contact</p>
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