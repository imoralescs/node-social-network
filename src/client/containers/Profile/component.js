import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Experience from '../../components/Experience';
import Education from '../../components/Education';

export default function Profile(props) {
    const { profile, loading } = props.state.profile;
    if(profile === null || loading) {
        return(
            <div className='main'>
                <h1>Loading</h1>
            </div>
        )
    }
    else {
        let 
            { user } = profile,
            experience, 
            education;
        
        if(profile.experience.length > 0) {
            experience = profile.experience.map(exp => (
                <Experience key={exp._id} {...exp} />
            ));
        }
            
        if(profile.education.length > 0) {
            education = profile.education.map(edu => (
                <Education key={edu._id} {...edu} />
            ));
        }
        
        return (
            <div className='main'>
                <div className='profiles-container'>
                    <div className='profile__avatar'>
                        <div className='profile__avatar-img'>
                            <img src={user.avatar} />
                        </div>
                    </div>
                    <div className='profile__welcome'>
                        <h1>{user.name}</h1>
                    </div>
                    <div>
                        <h2>Expererience</h2>
                        {experience}
                    </div>
                    <div>
                        <h2>Education</h2>
                        {education}
                    </div>
                </div>
            </div>
        )
    }
}