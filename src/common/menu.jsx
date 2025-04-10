import React from 'react';

function Menu() {
    return (
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
                <a href="#dashboard" className="nav-link text-white">
                    <i className="bi bi-speedometer2 me-2"></i>
                    Dashboard
                </a>
            </li>
            <li className="nav-item">
                <a href="#transactions" className="nav-link text-white">
                    <i className="bi bi-cash-coin me-2"></i>
                    Transações
                </a>
            </li>
            <li className="nav-item">
                <a href="#settings" className="nav-link text-white">
                    <i className="bi bi-gear me-2"></i>
                    Configurações
                </a>
            </li>
        </ul>
    );
}

export default Menu;
