import React from 'react';

function Header() {
    return (
        <header className='main-header custom-header'>
            <a href='/#/' className='logo custom-logo'>
                <span className='logo-mini custom-logo-mini'><b>My</b>M</span>
                <span className='logo-lg custom-logo-lg'>
                    <i className='fa fa-money'></i>
                    <b> My</b> Money
                </span>
            </a>

            <nav className='navbar navbar-static-top custom-navbar'>
                <a href='#' className='sidebar-toggle custom-toggle' data-toggle='offcanvas'></a>
            </nav>
        </header>
    );
}

export default Header;
