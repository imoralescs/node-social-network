import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function Landing(props) {
    return (
        <div className='app'>
            <Navbar { ...props } />
            <div className='main'>
                <h1>Landing pages</h1>
            </div>
            <Footer />
        </div>
    )
}
