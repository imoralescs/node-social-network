import { combineReducers } from 'redux';

const isEmpty = value =>
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);

function auth(state, { type, payload = null }) {
    state = state || {
        isAuthenticated: false,
        user: {},
        errors: {},
        loading: false
    }

    switch(type) {
        case 'REGISTER_REQUEST': {
            return Object.assign({}, state, { loading: true });
        }
        case 'REGISTER_ERROR': {
            return Object.assign({}, state, { errors: payload });
        }
        case 'LOGIN_REQUEST': {
            return Object.assign({}, state, { loading: true });
        }
        case 'LOGIN_ERROR': {
            return Object.assign({}, state, { errors: payload });
        }
        case 'SET_CURRENT_USER': {
            return Object.assign({}, state, { isAuthenticated:  !isEmpty(payload), user: payload});
        }
        default: {
            return state;
        }
    }
}

function profile(state, { type, payload = null}) {
    state = state || {
        profile: null,
        profiles: null,
        loading: false
    }

    switch(type) {
        case 'PROFILE_LOADING': {
            return {
                ...state,
                loading: true
            };
        }
        case 'GET_PROFILE': {
            return {
                ...state,
                profile: payload,
                loading: false
            }
        }
        case 'GET_PROFILES': {
            return {
                ...state,
                profiles: payload,
                loading: false
            }
        }
        case 'CLEAR_CURRENT_PROFILE': {
            return {
                ...state,
                profile: null
            }
        }
        default: {
            return state;
        }
    }
}

function post(state, { type, payload = null }) {
    state = state || {
        posts: [],
        post: {},
        loading: false
    }

    switch(type) {
        default: {
            return state;
        }
    }
}

function error(state, { type, payload = null}) {
    state = state || {
        errors: null
    }

    switch(type) {
        case 'ERROR': {
            return Object.assign({}, state, { errors: payload });
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    auth,
    profile,
    post,
    error
});