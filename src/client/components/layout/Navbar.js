import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return(
            <nav>
                <div><Link to='/'>Home</Link></div>
                <ul>
                    <li>
                        <Link to='/register'>Sign Up</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;