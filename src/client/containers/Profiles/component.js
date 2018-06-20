import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Profile from '../Profile';

export default function Profiles(props) { 
    console.log(props.state.profile.profiles);
    let profileItems;
    
    if(props.state.profile.profiles === null) {
        profileItems = <h2>Loading...</h2>
    }
    else {
        if(props.state.profile.profiles.length > 0) {
            profileItems = props.state.profile.profiles.map(profile => (<li key={profile._id}>
                <span>{profile.user.name}</span>
                <Link to='/profiles/view'>View Profile</Link>
            </li>));
        }
        else {
            profileItems = <h2>No profiles found...</h2>
        }
    }
    
    return (
        <div className='app'>
            <Navbar { ...props } />
            <Switch>
                <Route exact path='/profiles' render={() => (<div className='main'>
                    <h1>Developer Profiles</h1>
                    <p>Browse and connect with developers</p>
                    <ul>
                        {profileItems}
                    </ul>
                </div>)} />
                <Route path='/profiles/view' component={Profile} />
            </Switch>
            <Footer />
        </div>
    )
}
