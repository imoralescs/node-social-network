import React, { Component } from 'react';

const Textarea = (props) => (
    <div className='field'>
        <label className='field__label field__label--top'>{props.label}</label>
        <div className='field__content field__content--top'>
            <div className='input__container'>
                <textarea className='input input--text-area' cols="40" maxLength="20" value={props.value} onChange={props.onChange} name={props.name} />
            </div>
        </div>
    </div>
);

export default Textarea;