import React from 'react';
import '../common/dependencies';
import Header from '../common/header';
import Sidebar from '../common/sidebar';

function App(props) {
    return (
        <div className='wrapper'>
            <Header />
            <Sidebar />
        </div>
    );
}

export default App;
