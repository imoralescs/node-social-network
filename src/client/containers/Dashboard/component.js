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
    let dashboardContent;

    if(profile === null || loading) {
        dashboardContent = <h1>Loading</h1>
    }
    else {
        // Check if logged in user has profile
        if(Object.keys(profile).length > 0) {
            dashboardContent = (
                <div>
                    <p>Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link></p>
                    <Link to={`/dashboard/edit-profile`}>Edit Profile</Link>
                    <Link to={`/dashboard/add-experience`}>Add Expererience</Link>
                    <Link to={`/dashboard/add-education`}>Add Education</Link>
                    <Link to={`/dashboard/delete-profile`}>Delete Profile</Link>
                </div>
            )
        }
        else {
            // User is logged in but has no profile data
            dashboardContent = (
                <div>
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
        <div>
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