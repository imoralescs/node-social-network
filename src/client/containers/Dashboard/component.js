import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import CreateProfile from '../CreateProfile';
import EditProfile from '../EditProfile';
import AddExperience from '../AddExperience';
import AddEducation from '../AddEducation';

const ISOToDate = iso => {
    let 
        inter = iso.split("T"),
        newStr = inter[0].split("-").join("/") + " " + inter[1].split(".")[0] + " GMT",
        newDate = new Date(newStr),
        newFormat = (1 + newDate.getUTCMonth()) + "/" + newDate.getUTCDate() + "/" + newDate.getFullYear();
    return newFormat;
}

export default function Dashboard(props) {
    const { profile, loading } = props.state.profile;
    const { user } = props.state.auth;
    const {
        text,
        _onChange,
        _onSubmit,
        errors } = props;
    let dashboardContent;

    if(profile === null || loading) {
        dashboardContent = <h1>Loading</h1>
    }
    else {
        // Check if logged in user has profile
        if(Object.keys(profile).length > 0) {
            let experience, education;
            if(profile.experience.length > 0) {
                experience = profile.experience.map(exp => (
                    <div>
                        <p>{exp.title}</p>
                        <p>{exp.company}</p>
                        <p><span>{ISOToDate(exp.from)}</span> - <span>{ISOToDate(exp.to)}</span></p>
                        <p>{exp.description}</p>
                    </div>
                ));
            }

            if(profile.education.length > 0) {
                education = profile.education.map(edu => (
                    <div>
                        <p>{edu.degree}</p>
                        <p>{edu.school}</p>
                        <p>{edu.fieldofstudy}</p>
                        <p><span>{ISOToDate(edu.from)}</span> - <span>{ISOToDate(edu.to)}</span></p>
                        <p>{edu.description}</p>
                    </div>
                ));
            }

            dashboardContent = (
                <div className='main'>
                    <div className='profiles-container'>
                        <h2>Write a post</h2>
                        <form onSubmit={_onSubmit}>
                            <div>
                                <label>Post text</label>
                                <input 
                                    type='text' 
                                    name='text'
                                    value={text}
                                    onChange={_onChange} />
                                <span>{ errors.text ? errors.text : '' }</span>
                            </div>
                            <input type='submit' />
                        </form>
                    </div>
                    <div className='profiles-container'>
                        <div>
                            <div>
                                <img src={user.avatar} />
                            </div>
                        </div>
                        <div>
                            <p>Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link></p>
                        </div>
                        <div>
                            <Link to={`/dashboard/edit-profile`}>Edit Profile</Link>
                            <Link to={`/dashboard/add-experience`}>Add Expererience</Link>
                            <Link to={`/dashboard/add-education`}>Add Education</Link>
                            <Link to={`/dashboard/delete-profile`}>Delete Profile</Link>
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
        else {
            // User is logged in but has no profile data
            dashboardContent = (
                <div className='main'>
                    <p>Welcome {user.name}</p>
                    <p>You have not yet setup a profile, please add some info.</p>
                    <Link to='/dashboard/create-profile'>
                        Create Profile
                    </Link>
                </div>
            )
        }
    }
    
    return (
        <div className='app'>
            <Navbar { ...props } />
            <Switch>
                <Route exact path='/dashboard' render={() => (dashboardContent)} />
                <Route path='/dashboard/create-profile' component={CreateProfile} />
                <Route path='/dashboard/edit-profile' component={EditProfile} />
                <Route path='/dashboard/add-experience' component={AddExperience} />
                <Route path='/dashboard/add-education' component={AddEducation} />
            </Switch>
            <Footer />
        </div>
    )
}