import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function Landing(props) {
    return (
        <div className='app'>
            <Navbar { ...props } />
            <div className='main'>
                <div className='landing'>
                    <h1 className='landing__header'>Developer Connection</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}
