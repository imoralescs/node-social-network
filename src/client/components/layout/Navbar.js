import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        const { isAuthenticated, user } = this.props.state.auth;
        const authLinks = (
            <ul className='navbar__nav--user'>
                <li className='navbar__nav-item'>
                    <a href='/feed'>Feed</a>
                </li>
                <li className='navbar__nav-item'>
                    <a href='/'>{user.name}</a>
                </li>
                <li className='navbar__nav-item'>
                    <a href='#' onClick={event => {
                        event.preventDefault();
                        this.props.clearCurrentProfile();
                        this.props.logoutUser();
                    }}>Logout</a>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul className='navbar__nav--user'> 
                <li className='navbar__nav-item'>
                    <Link to='/register'>Sign Up</Link>
                </li>
                <li className='navbar__nav-item'>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        );
        return(
            <nav className='navbar'>
                <ul className='navbar__nav--main'>
                    <li className='navbar__nav-item'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='navbar__nav-item'>
                        <Link to='/profiles'>Profiles</Link>
                    </li>
                </ul>
                { isAuthenticated ? authLinks : guestLinks }
            </nav>
        );
    }
}

export default Navbar;