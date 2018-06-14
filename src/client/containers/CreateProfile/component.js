import React from 'react';

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
                <div>
                    <label>facebook</label>
                    <input 
                        type='text' 
                        name='facebook'
                        value={facebook}
                        onChange={_onChange} />
                    <span></span>
                </div>
                <div>
                    <label>twitter</label>
                    <input 
                        type='text' 
                        name='twitter'
                        value={twitter}
                        onChange={_onChange} />
                    <span></span>
                </div>
                <div>
                    <label>linkedid</label>
                    <input 
                        type='text' 
                        name='linkedid'
                        value={linkedid}
                        onChange={_onChange} />
                    <span></span>
                </div>
                <div>
                    <label>youtube</label>
                    <input 
                        type='text' 
                        name='youtube'
                        value={youtube}
                        onChange={_onChange} />
                    <span></span>
                </div>
                <div>
                    <label>instagram</label>
                    <input 
                        type='text' 
                        name='instagram'
                        value={instagram}
                        onChange={_onChange} />
                    <span></span>
                </div>
            </div>
        );
    }
    else {
        socialInputs = '';
    }

    return (
        <div>
            <h1>Create Profile</h1>
            <form onSubmit={_onSubmit}>
                <div>
                    <label>handle</label>
                    <input 
                        type='text' 
                        name='handle'
                        value={handle}
                        onChange={_onChange} />
                    <span>{ errors.handle ? errors.handle : '' }</span>
                </div>
                <div>
                    <label>status</label>
                    <select value={status} onChange={_onChange}>
                        <option value='developer'>Developer</option>
                    </select>
                    <span>{ errors.status ? errors.status : '' }</span>
                </div>
                <div>
                    <label>company</label>
                    <input 
                        type='text' 
                        name='company'
                        value={company}
                        onChange={_onChange} />
                    <span></span>
                </div>
                <div>
                    <label>website</label>
                    <input 
                        type='text' 
                        name='website'
                        value={website}
                        onChange={_onChange} />
                    <span></span>
                </div>
                <div>
                    <label>location</label>
                    <input 
                        type='text' 
                        name='profileLocation'
                        value={profileLocation}
                        onChange={_onChange} />
                    <span></span>
                </div>
                <div>
                    <label>skills</label>
                    <input 
                        type='text' 
                        name='skills'
                        value={skills}
                        onChange={_onChange} />
                    <span>{ errors.skills ? errors.skills : '' }</span>
                </div>
                <div>
                    <label>github username</label>
                    <input 
                        type='text' 
                        name='githubusername'
                        value={githubusername}
                        onChange={_onChange} />
                    <span></span>
                </div>
                <div>
                    <label>bio
                        <textarea value={bio} onChange={_onChange} name='bio' />
                    </label>
                    <span></span>
                </div>
                <button type='button' onClick={_addSocialLink}>Add Social Links</button>
                {socialInputs}
                <input type='submit' />
            </form>
        </div>
    )
}