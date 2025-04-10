import React from 'react';
import { Link } from 'react-router';

function Menu() {
    return (
        <ul className="nav nav-pills flex-column">
            <li className="nav-item">
                <Link to='/dashboard' className="nav-link text-white">
                    <i className="bi bi-speedometer2 me-2"></i>
                    Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link to='/billingCycles' className="nav-link text-white">
                    <i className="bi bi-cash-coin me-2"></i>
                    Ciclos de Pagamento
                </Link>
            </li>
        </ul>
    );
}

export default Menu;
