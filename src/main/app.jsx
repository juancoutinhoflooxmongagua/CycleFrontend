import React from 'react';
import '../common/dependencies';
import Header from '../common/header';
import Sidebar from '../common/sidebar';
import Footer  from '../common/footer';
function App(props) {
    return (
        <div className='wrapper'>
            <Header />
            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
