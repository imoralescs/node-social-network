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
        _onCheckboxChange,
        errors } = props;

    return (
        <div>
            <h1>Add Education</h1>
            <form onSubmit={_onSubmit}>
                <div>
                    <label>school</label>
                    <input 
                        type='text' 
                        name='school'
                        value={school}
                        onChange={_onChange} />
                    <span>{ errors.school ? errors.school : '' }</span>
                </div>
                <div>
                    <label>degree</label>
                    <input 
                        type='text' 
                        name='degree'
                        value={degree}
                        onChange={_onChange} />
                    <span>{ errors.degree ? errors.degree : '' }</span>
                </div>
                <div>
                    <label>field of study</label>
                    <input 
                        type='text' 
                        name='fieldofstudy'
                        value={fieldofstudy}
                        onChange={_onChange} />
                    <span>{ errors.fieldofstudy ? errors.fieldofstudy : '' }</span>
                </div>
                <div>
                    <label>current
                    <input 
                        type='checkbox' 
                        name='current'
                        checked={current}
                        value={current}
                        onChange={_onCheckboxChange} />
                    </label>
                    <span></span>
                </div>
                <div>
                    <label>description
                        <textarea 
                            value={description} 
                            onChange={_onChange} 
                            name='description' />
                    </label>
                    <span></span>
                </div>
                <input type='submit' />
            </form>
        </div>
    )
}