import React from 'react';
import '../common/dependencies';
import Header from '../common/header';
import Sidebar from '../common/sidebar';
import Footer  from '../common/footer';
import Routes from './routes'

function App(props) {
    return (
        <div className='wrapper'>
            <Header />
            <Sidebar />
            <div className='wrapper'>
                <Routes></Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
