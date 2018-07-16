import React from 'react';
import Field from '../../components/form/Field';
import Dropdown from '../../components/form/Dropdown';
import Textarea from '../../components/form/Textarea';

export default function CreateProfile(props) { 
    console.log(props); 
    const { 
        handle,
        status,
        company,
        website,
        profileLocation,
        skills,
        githubusername,
        bio,
        displaySocialInput,
        facebook,
        twitter,
        linkedid,
        youtube,
        instagram,
        _addSocialLink,
        _onChange,
        _onSubmit,
        errors } = props;
    
    let socialInputs;
    if(displaySocialInput) {
        socialInputs = (
            <div>
                <Field 
                    type='text'
                    label='Facebook'
                    name='facebook'
                    value={facebook}
                    onChange={_onChange} />
                <Field 
                    type='text'
                    label='Twitter'
                    name='twitter'
                    value={twitter}
                    onChange={_onChange} />
                <Field 
                    type='text'
                    label='LinkedId'
                    name='linkedid'
                    value={linkedid}
                    onChange={_onChange} />
                <Field 
                    type='text'
                    label='Youtube'
                    name='youtube'
                    value={youtube}
                    onChange={_onChange} />
                <Field 
                    type='text'
                    label='Instagram'
                    name='instagram'
                    value={instagram}
                    onChange={_onChange} />
            </div>
        );
    }
    else {
        socialInputs = '';
    }

    return (
        <div className='main'>
            <div className='profiles-container'>
                <h2>Edit Profile</h2>
                <form onSubmit={_onSubmit}>
                    <Field 
                            type='text'
                            label='Handle'
                            name='handle'
                            value={handle}
                            onChange={_onChange}
                            errors={errors.handle} />
                    <Dropdown 
                        label='Status'
                        name='status'
                        value={status}
                        onChange={_onChange}
                        errors={errors.status}
                        />
                    <Field 
                            type='text'
                            label='Company'
                            name='company'
                            value={company}
                            onChange={_onChange} />
                    <Field 
                            type='text'
                            label='Website'
                            name='website'
                            value={website}
                            onChange={_onChange} />
                    <Field 
                            type='text'
                            label='Location'
                            name='profileLocation'
                            value={profileLocation}
                            onChange={_onChange} />
                    <Field 
                            type='text'
                            label='Skills'
                            name='skills'
                            value={skills}
                            onChange={_onChange}
                            errors={errors.skills} />
                    <Field 
                            type='text'
                            label='Github Username'
                            name='githubusername'
                            value={githubusername}
                            onChange={_onChange} />
                    <Textarea
                        label='Bio'
                        onChange={_onChange}
                        value={bio}
                        name='bio' />
                    <button type='button' className='primary-btn' onClick={_addSocialLink}>Add Social Links</button>
                    {socialInputs}
                    <input className='primary-btn' type='submit' value='Update' />
                </form>
            </div>
        </div>
    )
}