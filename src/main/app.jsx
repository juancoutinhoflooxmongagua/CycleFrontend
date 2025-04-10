import React from 'react';
import '../common/dependencies';
import Header from '../common/header';
import Sidebar from '../common/sidebar';
import Footer from '../common/footer';

function App(props) {
    return (
        <div className='wrapper'>
            <Header />
            <div className='d-flex'>
                <Sidebar />
                <div className='content-wrapper flex-grow-1 p-3'>
                    {props.children}
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
