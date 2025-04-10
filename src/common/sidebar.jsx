import React from 'react';
import Menu from './menu';

function Sidebar(props) {
    return (
        <aside className="menu-sidebar">
            <section className="sidebar">
                <Menu />
            </section>
        </aside>
    );
}

export default Sidebar;
