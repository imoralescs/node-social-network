import React, { Component } from 'react';

const Checkbox = (props) => (
    <div className='checkbox'>
        <label className='checkbox__label'>{props.label}
            <input
                className='checkbox__input' 
                type='checkbox' 
                name={props.name}
                checked={props.value}
                value={props.value}
                onChange={props.onChange} />
        </label>
        <span></span>
    </div>
);

export default Checkbox;