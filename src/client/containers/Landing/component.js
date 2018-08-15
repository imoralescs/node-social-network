import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import svgCommunity from '../../static/svg/community.svg'

export default function Landing(props) {
    return (
        <div className='app'>
            <Navbar { ...props } />
            <section className='landing__hero'>
                <h1 className='landing__header'>Connection</h1>
                <h2 className='landing__sub-header'>Join and create connection between coworker</h2>
            </section>
            <Footer />
        </div>
    )
}
