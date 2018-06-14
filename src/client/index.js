import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import App from './containers/App';
import root from './store/reducers';
import setAuthToken from './utility/setAuthToken';
import { setCurrentUser, logoutUser, clearCurrentProfile } from './store/actions';

const thunkMiddleware = ({ dispatch, getState }) => {
    return (next) => (action) =>
        typeof action === 'function'
            ? action(dispatch, getState)
            : next(action);
};

const store = createStore(
    root,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

// Check for token
if(localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);

    // Decoded token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);

    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());

        // Clear current profile
        store.dispatch(clearCurrentProfile);

        // Redirect to login
        window.location.href = '/login';
    }   
}

const renderApp = (Component) => {
    render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('appMountPoint')
    );
}

renderApp(App);