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
                <Link className='profile-media-object' to='/profiles/view'>
                    <div className='profile-media-object__images'>
                        <img src={profile.user.avatar} />
                    </div>
                    <div className='profile-media-object__detail'>
                        <span>{profile.user.name}</span>
                    </div>
                </Link>
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
                    <div className='profiles-container'>
                        <h1 className='profiles-container__header'>Developer Profiles</h1>
                        <p className='profiles-container__text'>Browse and connect with developers</p>
                        <ul>
                            {profileItems}
                        </ul>
                    </div>
                </div>)} />
                <Route path='/profiles/view' component={Profile} />
            </Switch>
            <Footer />
        </div>
    )
}
