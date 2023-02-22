import React from 'react';
import logo from '../assets/images/logo.png'

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid background_settings">
                    <a className="navbar-brand image_settigs" href="#Home">
                        <img src={logo} alt="Logo" className="d-inline-block align-text-top logo_settings"/>
                    </a>
                    <div className="collapse navbar-collapse menu_settings" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Home">FielApp</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Home">Planes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Home">Contáctanos</a>
                            </li>
                        </ul>
                        <form className="container-fluid justify-content-start buttons_settings">
                            <button className="btn btn-sm btn-outline-secondary" type="button">Ingresar</button>
                            <button className="btn btn-sm btn-outline-secondary" type="button">Registrar</button>
                        </form>
                        <form className="d-flex search_settings" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success btn_personalizado" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    
    }
}
export default Header;