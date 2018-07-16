import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import svgCommunity from '../../static/svg/community.svg'

export default function Landing(props) {
    return (
        <div className='app'>
            <Navbar { ...props } />
            <div className='main main__background'>
                <div className='landing'>
                    <h1 className='landing__header'>Developer Connection</h1>
                    <div className='landing__image'>
                        <img src={svgCommunity} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
