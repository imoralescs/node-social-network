import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return(
            <footer className='footer'>
                Copyright &copy; { new Date().getFullYear() } Israel Morales
            </footer>
        );
    }
}

export default Footer;