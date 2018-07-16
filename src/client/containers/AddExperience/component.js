import React from 'react';
import Field from '../../components/form/Field';
import Textarea from '../../components/form/Textarea';
import Checkbox from '../../components/form/Checkbox';

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
        <div className='main'>
            <div className='profiles-container'>
                <h2 className='profiles-container__header'>Add Experience</h2>
                <form onSubmit={_onSubmit}>
                    <Field 
                        type='text'
                        label='Company'
                        name='company'
                        value={company}
                        onChange={_onChange}
                        errors={errors.company} />
                    <Field 
                        type='text'
                        label='Title'
                        name='title'
                        value={title}
                        onChange={_onChange}
                        errors={errors.title} />
                    <Field 
                        type='text'
                        label='Location'
                        name='locationExperience'
                        value={locationExperience}
                        onChange={_onChange} />
                    <Checkbox 
                        label='Current'
                        value={current}
                        onChange={_onCheckboxChange} />
                    <Textarea
                        label='Description'
                        onChange={_onChange}
                        value={description}
                        name='description' />
                    <input className='primary-btn' type='submit' />
                </form>
            </div>
        </div>
    )
}