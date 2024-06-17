import React, { useRef } from 'react';
import './index.css';
import logo from './componentns/logo.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navbar = () => {
    const navbarCollapseRef = useRef(null);

    const handleNavLinkClick = () => {
        if (navbarCollapseRef.current) {
            const navbarCollapse = navbarCollapseRef.current;
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    };

    return (
        <nav className="navbar navbar-expand-lg" id="navbar">
            <Link className="navbar-brand" to="/">
                <img src={logo} className="logo" alt="Logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon">
                    <i
                        className="fa fa-2x fa-bars"
                        style={{
                            color: '#17b6e6',
                            fontSize: '24px',
                            // backgroundColor: 'white',
                            padding: '10px',
                        }}
                        aria-hidden="true"
                    />
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarCollapseRef}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={handleNavLinkClick}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/roadmap" className="nav-link" onClick={handleNavLinkClick}>Roadmap</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/faq" className="nav-link" onClick={handleNavLinkClick}>FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleNavLinkClick}>Docs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={handleNavLinkClick}>Whitepaper</a>
                    </li>
                    <li className="nav-item" style={{ textAlign: 'center' }}>
                        <a
                            className="nav-link simple-btn"
                            style={{ padding: '10px 30px', textAlign: 'center' }}
                            href="#"
                            onClick={handleNavLinkClick}
                            download
                        >
                            Presale
                        </a>
                    </li>

                    <li className="nav-item" style={{ textAlign: 'center' }}>
                        <a
                            className="nav-link gradient-btn"
                            style={{ padding: '10px 30px', textAlign: 'center' }}
                            href="#"
                            onClick={handleNavLinkClick}
                            download
                        >
                            Connect
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default Navbar;