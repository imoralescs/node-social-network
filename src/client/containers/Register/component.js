import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Field from '../../components/form/Field';

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
                <form className='form' onSubmit={_onSubmit}>
                    <h1 className='form__header'>Create Your Account</h1>
                    <Field 
                        type='text'
                        label='Name'
                        name='name'
                        value={name}
                        onChange={_onChange}
                        errors={errors.name} />
                    <Field 
                        type='email'
                        label='Email'
                        name='email'
                        value={email}
                        onChange={_onChange}
                        errors={errors.email} />
                    <Field 
                        type='password'
                        label='Password'
                        name='password'
                        value={password}
                        onChange={_onChange}
                        errors={errors.password} />
                    <Field 
                        type='password'
                        label='Confirm Password'
                        name='password2'
                        value={password2}
                        onChange={_onChange}
                        errors={errors.password2} />
                    <input className='primary-btn' type='submit' />
                </form>
            </div>
            <Footer />
        </div>
    )
}
