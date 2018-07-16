import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Experience from '../../components/Experience';
import Education from '../../components/Education';
import WysiwygEditor from '../../components/form/WysiwygEditor';
import CreateProfile from '../CreateProfile';
import EditProfile from '../EditProfile';
import AddExperience from '../AddExperience';
import AddEducation from '../AddEducation';
import Loader from '../../components/Loader';

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
        dashboardContent = <Loader />
    }
    else {
        // Check if logged in user has profile
        if(Object.keys(profile).length > 0) {
            let experience, education;
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

            dashboardContent = (
                <div className='main'>
                    <div className='profiles-container'>
                        <h2>Write a post</h2>
                        <form className='profile__post-form' onSubmit={_onSubmit}>
                            <div className='field__content field__content--top'>
                                <div className='input__container'>
                                    <WysiwygEditor html={html} onChange={_onChange} name='html'/>
                                    <span className='field__error'>{ errors.text ? errors.text : '' }</span>
                                </div>
                            </div>
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
                            <p className='profile__paragraph'>Welcome <Link to={`/profiles/view/${profile.handle}`}>{user.name}</Link></p>
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
                            <h2 className='profiles-container__sub-header'>Biography</h2>
                            <p className='profile__paragraph'>{profile.bio}</p>
                        </div>
                        <div>
                            <h2 className='profiles-container__sub-header'>Expererience</h2>
                            {experience}
                        </div>
                        <div>
                            <h2 className='profiles-container__sub-header'>Education</h2>
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