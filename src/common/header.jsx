import React from 'react';

function Header() {
    return (
        <header className="navbar navbar-dark bg-dark px-3">
            <a href="/#/" className="navbar-brand d-flex align-items-center">
                <span className="d-none d-sm-inline me-2">
                    <i className="bi bi-cash-stack me-1"></i>
                    <strong>My</strong> Money
                </span>
                <span className="d-sm-none">
                    <strong>My</strong>M
                </span>
            </a>

            <button 
                className="btn btn-dark d-lg-none" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#sidebar" 
                aria-controls="sidebar"
            >
                <i className="bi bi-list"></i>
            </button>
        </header>
    );
}

export default Header;
