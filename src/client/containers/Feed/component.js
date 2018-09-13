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
    const { posts, loading } = props.state.post;
    const { user } = props.state.auth;
    const {
        text,
        html,
        _onChange,
        _onSubmit,
        errors } = props;

    let loadingComponent = loading 
    ? <Loader />
    : ''
    console.log(posts)
    return (
        <div className='app'>
            <Navbar { ...props } />
            <div className='main'>
                <div className='profiles-container'>
                    <h2>Write a post</h2>
                    <form className='profile__post-form' onSubmit={_onSubmit}>
                        <div className='field__content field__content--top'>
                            <div className='input__container'>
                                <WysiwygEditor html={html} onChange={_onChange} name='text'/>
                                <span className='field__error'>{ errors.text ? errors.text : '' }</span>
                            </div>
                        </div>
                        <input className='primary-btn' style={{ margin : '0'}} type='submit' />
                    </form>
                </div>
                { loadingComponent }
                <div>
                    <ul>
                    {posts.map(post => {
                        return(
                            <li key={post._id}>{post.text}</li>
                        )
                    })}
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}