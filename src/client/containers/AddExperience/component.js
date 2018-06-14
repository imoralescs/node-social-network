import React from 'react';

export default function AddExperience(props) { 
    console.log(props); 
    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description,
        disabled, 
        _onChange,
        _onSubmit,
        errors } = props;

    return (
        <div>
            <h1>Add Experience</h1>
            <form onSubmit={_onSubmit}>
                <input type='submit' />
            </form>
        </div>
    )
}