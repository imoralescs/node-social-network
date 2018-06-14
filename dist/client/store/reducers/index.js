'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _redux = require('redux');

var isEmpty = function isEmpty(value) {
    return value === undefined || value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0;
};

function auth(state, _ref) {
    var type = _ref.type,
        _ref$payload = _ref.payload,
        payload = _ref$payload === undefined ? null : _ref$payload;

    state = state || {
        isAuthenticated: false,
        user: {},
        errors: {},
        loading: false
    };

    switch (type) {
        case 'REGISTER_REQUEST':
            {
                return Object.assign({}, state, { loading: true });
            }
        case 'REGISTER_ERROR':
            {
                return Object.assign({}, state, { errors: payload });
            }
        case 'LOGIN_REQUEST':
            {
                return Object.assign({}, state, { loading: true });
            }
        case 'LOGIN_ERROR':
            {
                return Object.assign({}, state, { errors: payload });
            }
        case 'SET_CURRENT_USER':
            {
                return Object.assign({}, state, { isAuthenticated: !isEmpty(payload), user: payload });
            }
        default:
            {
                return state;
            }
    }
}

function profile(state, _ref2) {
    var type = _ref2.type,
        _ref2$payload = _ref2.payload,
        payload = _ref2$payload === undefined ? null : _ref2$payload;

    state = state || {
        profile: null,
        profiles: null,
        loading: false
    };

    switch (type) {
        case 'PROFILE_LOADING':
            {
                return _extends({}, state, {
                    loading: true
                });
            }
        case 'GET_PROFILE':
            {
                return _extends({}, state, {
                    profile: payload,
                    loading: false
                });
            }
        case 'CLEAR_CURRENT_PROFILE':
            {
                return _extends({}, state, {
                    profile: null
                });
            }
        default:
            {
                return state;
            }
    }
}

function error(state, _ref3) {
    var type = _ref3.type,
        _ref3$payload = _ref3.payload,
        payload = _ref3$payload === undefined ? null : _ref3$payload;

    state = state || {
        errors: null
    };

    switch (type) {
        case 'ERROR':
            {
                return Object.assign({}, state, { errors: payload });
            }
        default:
            {
                return state;
            }
    }
}

exports.default = (0, _redux.combineReducers)({
    auth: auth,
    profile: profile,
    error: error
});