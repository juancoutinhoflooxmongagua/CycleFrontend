import React from 'react';
import Menu from './menu';

function Sidebar() {
    return (
        <div>
            <aside className="d-none d-lg-block bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
                <Menu />
            </aside>

            <div className="offcanvas offcanvas-start bg-dark text-white" tabIndex="-1" id="sidebar">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title">My Money</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Menu />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
