import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function Login(props) {
    const { 
        email, 
        password,
        errors,
        _onChange,
        _onSubmit } = props;
        
    return (
        <div>
            <Navbar { ...props } />
            <div>
                <h1>Login</h1>
                <form onSubmit={_onSubmit}>
                    <div>
                        <label>email</label>
                        <input 
                            type='email' 
                            name='email'
                            value={email}
                            onChange={_onChange} />
                        <span>{ errors.email ? errors.email : '' }</span>
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type='password' 
                            name='password'
                            value={password}
                            onChange={_onChange} />
                        <span>{ errors.password ? errors.password : '' }</span>
                    </div>
                    <input type='submit' />
                </form>
            </div>
            <Footer />
        </div>
    )
}
