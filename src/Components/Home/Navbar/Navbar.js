import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <h3 className=" ms-5">Senior-Care <br /> <span style={{ color: 'green', fontSize: '20px' }}>Home Care & Assistant.</span></h3>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                        <li className="nav-item  ms-3 ">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="#giver">Our Giver</Link>
                        </li>
                       
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="#blog">Blog</Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="#contact">Contact</Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;