import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

export default function Register(props) {
    const {
        name, 
        email, 
        password,
        password2,
        errors,
        _onChange,
        _onSubmit } = props;

    return (
        <div className='app'>
            <Navbar { ...props } />
            <div className='main'>
                <h1>Register</h1>
                <form onSubmit={_onSubmit}>
                    <div>
                        <label>name</label>
                        <input 
                            type='text' 
                            name='name' 
                            value={name}
                            onChange={_onChange} />
                        <span>{ errors.name ? errors.name : '' }</span>
                    </div>
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
                    <div>
                        <label>Confirm Password</label>
                        <input 
                            type='password' 
                            name='password2'
                            value={password2}
                            onChange={_onChange} />
                        <span>{ errors.password2 ? errors.password2 : '' }</span>
                    </div>
                    <input type='submit' />
                </form>
            </div>
            <Footer />
        </div>
    )
}
