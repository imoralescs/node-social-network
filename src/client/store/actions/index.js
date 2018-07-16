import axios from 'axios';
import jwt_decode from 'jwt-decode';
import url from '../../config.js';
import setAuthToken from '../../utility/setAuthToken';

// Register - Register new user to our system
export const registerUser = (userData, history) => dispatch => {
    dispatch({ type: 'REGISTER_REQUEST' });
    axios
        .post(`${url.development}/api/users/register`, {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            password2: userData.password2
        })
        .then(response => {
            history.push('/login'); 
            return response;
        })
        .catch(error => { 
            if(error.response) {
                if(error.response.status === 400) {
                    dispatch({
                        type: 'REGISTER_ERROR',
                        payload: error.response.data
                    });
                }
                else {
                    dispatch({
                        type: 'REGISTER_ERROR',
                        payload: { errors: 'Unknown' }
                    });
                }
            }
            return error;
        });
} 

// Login - Get user token
export const loginUser = userData => dispatch => {
    dispatch({ type: 'LOGIN_REQUEST' });
    axios
        .post(`${url.development}/api/users/login`, {
            email: userData.email,
            password: userData.password
        })
        .then(response => {
            // Save to localStorage
            const { token } = response.data;

            // Set token to ls
            localStorage.setItem('jwtToken', token);

            // Set token to Auth header
            setAuthToken(token);

            // Decode token to get user data
            const decoded = jwt_decode(token);

            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(error => { 
            if(error.response) {
                if(error.response.status === 400) {
                    dispatch({
                        type: 'LOGIN_ERROR',
                        payload: error.response.data
                    });
                }
                else {
                    dispatch({
                        type: 'LOGIN_ERROR',
                        payload: { errors: 'Unknown' }
                    });
                }
            }
            return error;
        });
} 

// Logout - Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');

    // Remove auth header for future request
    setAuthToken(false);

    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};

export const setCurrentUser = decoded => {
    return {
        type: 'SET_CURRENT_USER',
        payload: decoded
    };
};

// Create profile
export const createProfile = (profileData, history) => dispatch => {
    axios
        .post(`${url.development}/api/profile`, profileData)
        .then(response => {
            dispatch({
                type: 'GET_PROFILE',
                payload: response.data
            });
            return response;
        })
        .then(response => {
            history.push('/dashboard');
            return response;
        })
        .catch(error => dispatch({
            type: 'ERROR',
            payload: error.response.data
        }));
}

// Delete account and profile
export const deleteProfile = () => dispatch => {
    axios
        .delete(`${url.development}/api/profile`)
        .then(response => {
            dispatch({
                type: 'SET_CURRENT_USER',
                payload: {}
            });
            return response;
        })
        .catch(error => {
            dispatch({
                type: 'GET_ERRORS',
                payload: error.response.data
            });
            return error;
        });
}

// Get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get(`${url.development}/api/profile`)
        .then(response => dispatch({
            type: 'GET_CURRENT_PROFILE',
            payload: response.data
        }))
        .catch(error => dispatch({
            type: 'GET_CURRENT_PROFILE',
            payload: {}
        }));
}

// Get profile
export const getProfile = (handle) => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get(`${url.development}/api/profile/handle/${handle}`)
        .then(response => dispatch({
            type: 'GET_PROFILE',
            payload: response.data
        }))
        .catch(error => dispatch({
            type: 'GET_PROFILE',
            payload: {}
        }));
}

// Get all profiles
export const getProfiles = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get(`${url.development}/api/profile/all`)
        .then(response => dispatch({
            type: 'GET_PROFILES',
            payload: response.data
        }))
        .catch(error => dispatch({
            type: 'GET_PROFILES',
            payload: {}
        }));
}

// Profile loading
export const setProfileLoading = () => {
    return {
        type: 'PROFILE_LOADING'
    }
}

// Clear profile
export const clearCurrentProfile = () => {
    return {
        type: 'CLEAR_CURRENT_PROFILE'
    }
}

// Add Experience
export const addExperience = (experienceData, history) => dispatch => {
    axios
        .post(`${url.development}/api/profile/experience`, experienceData)
        .then(response => {
            dispatch({
                type: 'GET_CURRENT_PROFILE',
                payload: response.data
            });
            return response;
        })
        .then(response => {
            history.push('/dashboard');
            return response;
        })
        .catch(error => dispatch({
            type: 'ERROR',
            payload: error.response.data
        }));
}

// Add Education
export const addEducation = (educationData, history) => dispatch => {
    axios
        .post(`${url.development}/api/profile/education`, educationData)
        .then(response => {
            dispatch({
                type: 'GET_CURRENT_PROFILE',
                payload: response.data
            });
            return response;
        })
        .then(response => {
            history.push('/dashboard');
            return response;
        })
        .catch(error => dispatch({
            type: 'ERROR',
            payload: error.response.data
        }));
}

// Add Post
export const addPost = (postData) => dispatch => {
    axios
        .post(`${url.development}/api/posts`, postData)
        .then(response => {
            dispatch({
                type: 'ADD_POST',
                payload: response.data
            });
            return response;
        })
        .catch(error => dispatch({
            type: 'ERROR',
            payload: error.response.data
        }));
}