'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

var _reducers = require('./store/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _setAuthToken = require('./utility/setAuthToken');

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _actions = require('./store/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var thunkMiddleware = function thunkMiddleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;

    return function (next) {
        return function (action) {
            return typeof action === 'function' ? action(dispatch, getState) : next(action);
        };
    };
};

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// Check for token
if (localStorage.jwtToken) {
    // Set auth token header auth
    (0, _setAuthToken2.default)(localStorage.jwtToken);

    // Decoded token and get user info and exp
    var decoded = (0, _jwtDecode2.default)(localStorage.jwtToken);

    // Set user and isAuthenticated
    store.dispatch((0, _actions.setCurrentUser)(decoded));

    // Check for expired token
    var currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch((0, _actions.logoutUser)());

        // Clear current profile
        store.dispatch(_actions.clearCurrentProfile);

        // Redirect to login
        window.location.href = '/login';
    }
}

var renderApp = function renderApp(Component) {
    (0, _reactDom.render)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(Component, null)
    ), document.getElementById('appMountPoint'));
};

renderApp(_App2.default);