import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function Landing(props) {
    return (
        <div>
            <Navbar { ...props } />
            <h1>Landing pages</h1>
            <Footer />
        </div>
    )
}
