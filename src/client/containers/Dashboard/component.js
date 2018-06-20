import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import CreateProfile from '../CreateProfile';
import EditProfile from '../EditProfile';
import AddExperience from '../AddExperience';
import AddEducation from '../AddEducation';

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
            dashboardContent = (
                <div className='main'>
                    <p>Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link></p>
                    <Link to={`/dashboard/edit-profile`}>Edit Profile</Link>
                    <Link to={`/dashboard/add-experience`}>Add Expererience</Link>
                    <Link to={`/dashboard/add-education`}>Add Education</Link>
                    <Link to={`/dashboard/delete-profile`}>Delete Profile</Link>
                    <div>
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