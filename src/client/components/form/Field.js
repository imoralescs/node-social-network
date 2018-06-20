import React, { Component } from 'react';

const Field = (props) => (
    <div className='field'>
        <label className='field__label field__label--top'>{props.label}</label>
        <div className='field__content field__content--top'>
            <div className='input__container'>
                <input
                    className='input input--text'
                    autoComplete='off' 
                    type={props.type} 
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange} />
                <span className='field__error'>{ props.errors ? props.errors : '' }</span>
            </div>
        </div>
    </div>
);

export default Field;