import React from 'react';

export default function AddExperience(props) { 
    const {
        company,
        title,
        locationExperience,
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
            <h1>Add Experience</h1>
            <form onSubmit={_onSubmit}>
                <div>
                    <label>company</label>
                    <input 
                        type='text' 
                        name='company'
                        value={company}
                        onChange={_onChange} />
                    <span>{ errors.company ? errors.company : '' }</span>
                </div>
                <div>
                    <label>title</label>
                    <input 
                        type='text' 
                        name='title'
                        value={title}
                        onChange={_onChange} />
                    <span>{ errors.title ? errors.title : '' }</span>
                </div>
                <div>
                    <label>location</label>
                    <input 
                        type='text' 
                        name='locationExperience'
                        value={locationExperience}
                        onChange={_onChange} />
                    <span></span>
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