import React from "react";

function Navegation() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Index</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="#home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#somos">Quienes somos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#productos">Nuestros productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contacto">Contacto</a>
                </li>
            </ul>
        </div>
    </nav>
}

export default Navegation;
