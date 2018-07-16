import React from 'react';
import Field from '../../components/form/Field';
import Textarea from '../../components/form/Textarea';
import Checkbox from '../../components/form/Checkbox';

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
        <div className='main'>
            <div className='profiles-container'>
                <h2 className='profiles-container__header'>Add Education</h2>
                <form onSubmit={_onSubmit}>
                    <Field 
                        type='text'
                        label='School'
                        name='school'
                        value={school}
                        onChange={_onChange}
                        errors={errors.school} />
                    <Field 
                        type='text'
                        label='Degree'
                        name='degree'
                        value={degree}
                        onChange={_onChange}
                        errors={errors.degree} />
                    <Field 
                        type='text'
                        label='Field of Study'
                        name='fieldofstudy'
                        value={fieldofstudy}
                        onChange={_onChange}
                        errors={errors.fieldofstudy} />
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