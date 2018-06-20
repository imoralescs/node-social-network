import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Field from '../../components/form/Field';

export default function Login(props) {
    const { 
        email, 
        password,
        errors,
        _onChange,
        _onSubmit } = props;
        
    return (
        <div className='app'>
            <Navbar { ...props } />
            <div className='main'>
                <form onSubmit={_onSubmit} autoComplete='off'>
                    <Field 
                        type='email'
                        label='Email'
                        name='email'
                        value={email}
                        onChange={_onChange}
                        errors={errors.email} />
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
