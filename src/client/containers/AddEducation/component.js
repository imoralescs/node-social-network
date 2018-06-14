import React from 'react';

export default function AddEducation(props) { 
    console.log(props); 
    const {
        school,
        degree,
        fieldofstudy,
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
            <h1>Add Education</h1>
            <form onSubmit={_onSubmit}>
                <input type='submit' />
            </form>
        </div>
    )
}