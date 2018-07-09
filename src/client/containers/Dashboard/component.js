import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import WysiwygEditor from '../../components/form/WysiwygEditor';
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
    const { currentProfile, loading } = props.state.profile;
    const profile = currentProfile;
    const { user } = props.state.auth;
    const {
        text,
        html,
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
                    <div className='experience'>
                        <p className='experience__title'>{exp.title}</p>
                        <p className='experience__company'>{exp.company}</p>
                        <p className='experience__date'><span>{ISOToDate(exp.from)}</span> - <span>{ISOToDate(exp.to)}</span></p>
                        <p className='experience__description'>{exp.description}</p>
                    </div>
                ));
            }

            if(profile.education.length > 0) {
                education = profile.education.map(edu => (
                    <div className='education'>
                        <p className='education__degree'>{edu.degree}</p>
                        <p className='education__school'>{edu.school}</p>
                        <p className='education__study'>{edu.fieldofstudy}</p>
                        <p className='education__date'><span>{ISOToDate(edu.from)}</span> - <span>{ISOToDate(edu.to)}</span></p>
                        <p className='education__description'>{edu.description}</p>
                    </div>
                ));
            }

            dashboardContent = (
                <div className='main'>
                    <div className='profiles-container'>
                        <h2>Write a post</h2>
                        <form className='profile__post-form' onSubmit={_onSubmit}>
                            <div className='profile__textarea'>
                                <textarea name='text' className='profile__textarea-field' value={text} onChange={_onChange} />
                                <span>{ errors.text ? errors.text : '' }</span>
                            </div>
                            <WysiwygEditor html={html} />
                            <input className='primary-btn' style={{ margin : '0'}} type='submit' />
                        </form>
                    </div>
                    <div className='profiles-container'>
                        <div className='profile__avatar'>
                            <div className='profile__avatar-img'>
                                <img src={user.avatar} />
                            </div>
                        </div>
                        <div className='profile__welcome'>
                            <p>Welcome <Link to={`/profiles/view/${profile.handle}`}>{user.name}</Link></p>
                        </div>
                        <ul className='profile__edit-buttons'>
                            <li className='profile__edit-button-item'>
                                <Link className='edit-btn' to={`/dashboard/edit-profile`}>Edit Profile</Link>
                            </li>
                            <li className='profile__edit-button-item'>
                                <Link className='edit-btn' to={`/dashboard/add-experience`}>Add Expererience</Link>
                            </li>
                            <li className='profile__edit-button-item'>
                                <Link className='edit-btn' to={`/dashboard/add-education`}>Add Education</Link>
                            </li>
                            <li className='profile__edit-button-item'>
                                <Link className='edit-btn' to={`/dashboard/delete-profile`}>Delete Profile</Link>
                            </li>
                        </ul>
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