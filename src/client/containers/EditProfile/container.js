import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions';

const isArray = (arr) => (toString.call(arr) === "[object Array]");

function mapStateToProps(state) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

function handlers(WrappedComponent) {
  return class extends React.Component { 
    state = {
        displaySocialInput: false,
        handle: this.props.state.profile.currentProfile.handle || '',
        company: this.props.state.profile.currentProfile.company || '',
        website: this.props.state.profile.currentProfile.website || '',
        profileLocation: this.props.state.profile.currentProfile.location || '',
        status: this.props.state.profile.currentProfile.status || 'developer',
        skills: this.props.state.profile.currentProfile.skills.join(',') || '',
        githubusername: this.props.state.profile.currentProfile.githubusername || '',
        bio: this.props.state.profile.currentProfile.bio || '',
        twitter: this.props.state.profile.currentProfile.twitter || '',
        facebook: this.props.state.profile.currentProfile.facebook || '',
        linkedin: this.props.state.profile.currentProfile.linkedin || '',
        youtube: this.props.state.profile.currentProfile.youtube || '',
        instagram: this.props.state.profile.currentProfile.instagram || '',
        errors: {}
    }
        
    componentWillReceiveProps(nextProps) {      
      if(nextProps.state.error !== this.props.state.error) {
        this.setState({
          errors : nextProps.state.error.errors
        })
      }
    }

    _onChange = (event) => {
        this.setState({ 
          [event.target.name]: event.target.value 
        });
    }

    _onSubmit = (event) => {
        event.preventDefault();

        const profileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            profileLocation: this.state.profileLocation,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
            instagram: this.state.instagram
        }
        
        this.props.createProfile(profileData, this.props.history);
    }
    
    _addSocialLink = () => {

          this.setState({
            displaySocialInput: !this.state.displaySocialInput
          })
    }
    
    render() {
      return (
        <WrappedComponent
          {...this.state}
          {...this.props}
          _onChange={this._onChange}
          _onSubmit={this._onSubmit}
          _addSocialLink={this._addSocialLink}
        />
      );
    }
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), handlers);