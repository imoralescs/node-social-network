'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addPost = exports.addEducation = exports.addExperience = exports.clearCurrentProfile = exports.setProfileLoading = exports.getProfiles = exports.getCurrentProfile = exports.deleteProfile = exports.createProfile = exports.setCurrentUser = exports.logoutUser = exports.loginUser = exports.registerUser = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _config = require('../../config.js');

var _config2 = _interopRequireDefault(_config);

var _setAuthToken = require('../../utility/setAuthToken');

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Register - Register new user to our system
var registerUser = exports.registerUser = function registerUser(userData, history) {
    return function (dispatch) {
        dispatch({ type: 'REGISTER_REQUEST' });
        _axios2.default.post(_config2.default.development + '/api/users/register', {
            name: userData.name,
            email: userData.email,
            password: userData.password,
            password2: userData.password2
        }).then(function (response) {
            history.push('/login');
            return response;
        }).catch(function (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    dispatch({
                        type: 'REGISTER_ERROR',
                        payload: error.response.data
                    });
                } else {
                    dispatch({
                        type: 'REGISTER_ERROR',
                        payload: { errors: 'Unknown' }
                    });
                }
            }
            return error;
        });
    };
};

// Login - Get user token
var loginUser = exports.loginUser = function loginUser(userData) {
    return function (dispatch) {
        dispatch({ type: 'LOGIN_REQUEST' });
        _axios2.default.post(_config2.default.development + '/api/users/login', {
            email: userData.email,
            password: userData.password
        }).then(function (response) {
            // Save to localStorage
            var token = response.data.token;

            // Set token to ls

            localStorage.setItem('jwtToken', token);

            // Set token to Auth header
            (0, _setAuthToken2.default)(token);

            // Decode token to get user data
            var decoded = (0, _jwtDecode2.default)(token);

            // Set current user
            dispatch(setCurrentUser(decoded));
        }).catch(function (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    dispatch({
                        type: 'LOGIN_ERROR',
                        payload: error.response.data
                    });
                } else {
                    dispatch({
                        type: 'LOGIN_ERROR',
                        payload: { errors: 'Unknown' }
                    });
                }
            }
            return error;
        });
    };
};

// Logout - Log user out
var logoutUser = exports.logoutUser = function logoutUser() {
    return function (dispatch) {
        // Remove token from localStorage
        localStorage.removeItem('jwtToken');

        // Remove auth header for future request
        (0, _setAuthToken2.default)(false);

        // Set current user to {} which will set isAuthenticated to false
        dispatch(setCurrentUser({}));
    };
};

var setCurrentUser = exports.setCurrentUser = function setCurrentUser(decoded) {
    return {
        type: 'SET_CURRENT_USER',
        payload: decoded
    };
};

// Create profile
var createProfile = exports.createProfile = function createProfile(profileData, history) {
    return function (dispatch) {
        _axios2.default.post(_config2.default.development + '/api/profile', profileData).then(function (response) {
            dispatch({
                type: 'GET_PROFILE',
                payload: response.data
            });
            return response;
        }).then(function (response) {
            history.push('/dashboard');
            return response;
        }).catch(function (error) {
            return dispatch({
                type: 'ERROR',
                payload: error.response.data
            });
        });
    };
};

// Delete account and profile
var deleteProfile = exports.deleteProfile = function deleteProfile() {
    return function (dispatch) {
        _axios2.default.delete(_config2.default.development + '/api/profile').then(function (response) {
            dispatch({
                type: 'SET_CURRENT_USER',
                payload: {}
            });
            return response;
        }).catch(function (error) {
            dispatch({
                type: 'GET_ERRORS',
                payload: error.response.data
            });
            return error;
        });
    };
};

// Get current profile
var getCurrentProfile = exports.getCurrentProfile = function getCurrentProfile() {
    return function (dispatch) {
        dispatch(setProfileLoading());
        _axios2.default.get(_config2.default.development + '/api/profile').then(function (response) {
            return dispatch({
                type: 'GET_PROFILE',
                payload: response.data
            });
        }).catch(function (error) {
            return dispatch({
                type: 'GET_PROFILE',
                payload: {}
            });
        });
    };
};

// Get all profiles
var getProfiles = exports.getProfiles = function getProfiles() {
    return function (dispatch) {
        dispatch(setProfileLoading());
        _axios2.default.get(_config2.default.development + '/api/profile/all').then(function (response) {
            return dispatch({
                type: 'GET_PROFILES',
                payload: response.data
            });
        }).catch(function (error) {
            return dispatch({
                type: 'GET_PROFILES',
                payload: {}
            });
        });
    };
};

// Profile loading
var setProfileLoading = exports.setProfileLoading = function setProfileLoading() {
    return {
        type: 'PROFILE_LOADING'
    };
};

// Clear profile
var clearCurrentProfile = exports.clearCurrentProfile = function clearCurrentProfile() {
    return {
        type: 'CLEAR_CURRENT_PROFILE'
    };
};

// Add Experience
var addExperience = exports.addExperience = function addExperience(experienceData, history) {
    return function (dispatch) {
        _axios2.default.post(_config2.default.development + '/api/profile/experience', experienceData).then(function (response) {
            dispatch({
                type: 'GET_PROFILE',
                payload: response.data
            });
            return response;
        }).then(function (response) {
            history.push('/dashboard');
            return response;
        }).catch(function (error) {
            return dispatch({
                type: 'ERROR',
                payload: error.response.data
            });
        });
    };
};

// Add Education
var addEducation = exports.addEducation = function addEducation(educationData, history) {
    return function (dispatch) {
        _axios2.default.post(_config2.default.development + '/api/profile/education', educationData).then(function (response) {
            dispatch({
                type: 'GET_PROFILE',
                payload: response.data
            });
            return response;
        }).then(function (response) {
            history.push('/dashboard');
            return response;
        }).catch(function (error) {
            return dispatch({
                type: 'ERROR',
                payload: error.response.data
            });
        });
    };
};

// Add Post
var addPost = exports.addPost = function addPost(postData) {
    return function (dispatch) {
        _axios2.default.post(_config2.default.development + '/api/posts', postData).then(function (response) {
            dispatch({
                type: 'ADD_POST',
                payload: response.data
            });
            return response;
        }).catch(function (error) {
            return dispatch({
                type: 'ERROR',
                payload: error.response.data
            });
        });
    };
};