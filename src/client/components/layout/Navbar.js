import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        const { isAuthenticated, user } = this.props.state.auth;
        const authLinks = (
            <ul>
                <li>
                    <span>{user.name}</span>
                </li>
                <li>
                    <a href='#' onClick={event => {
                        event.preventDefault();
                        this.props.clearCurrentProfile();
                        this.props.logoutUser();
                    }}>Logout</a>
                </li>
            </ul>
        );
        const guestLinks = (
            <ul>
                <li>
                    <Link to='/register'>Sign Up</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        );
        return(
            <nav>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/profiles'>Profiles</Link></div>
                { isAuthenticated ? authLinks : guestLinks }
            </nav>
        );
    }
}

export default Navbar;