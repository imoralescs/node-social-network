'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Dashboard;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Navbar = require('../../components/layout/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('../../components/layout/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _CreateProfile = require('../CreateProfile');

var _CreateProfile2 = _interopRequireDefault(_CreateProfile);

var _EditProfile = require('../EditProfile');

var _EditProfile2 = _interopRequireDefault(_EditProfile);

var _AddExperience = require('../AddExperience');

var _AddExperience2 = _interopRequireDefault(_AddExperience);

var _AddEducation = require('../AddEducation');

var _AddEducation2 = _interopRequireDefault(_AddEducation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dashboard(props) {
    var _props$state$profile = props.state.profile,
        profile = _props$state$profile.profile,
        loading = _props$state$profile.loading;
    var user = props.state.auth.user;

    var dashboardContent = void 0;

    if (profile === null || loading) {
        dashboardContent = _react2.default.createElement(
            'h1',
            null,
            'Loading'
        );
    } else {
        // Check if logged in user has profile
        if (Object.keys(profile).length > 0) {
            dashboardContent = _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Welcome ',
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/profile/' + profile.handle },
                        user.name
                    )
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/dashboard/edit-profile' },
                    'Edit Profile'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/dashboard/add-experience' },
                    'Add Expererience'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/dashboard/add-education' },
                    'Add Education'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/dashboard/delete-profile' },
                    'Delete Profile'
                )
            );
        } else {
            // User is logged in but has no profile data
            dashboardContent = _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Welcome ',
                    user.name
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'You have not yet setup a profile, please add some info.'
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/dashboard/create-profile' },
                    'Create Profile'
                )
            );
        }
    }

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, props),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/dashboard', render: function render() {
                    return dashboardContent;
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard/create-profile', component: _CreateProfile2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard/edit-profile', component: _EditProfile2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard/add-experience', component: _AddExperience2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard/add-education', component: _AddEducation2.default })
        ),
        _react2.default.createElement(_Footer2.default, null)
    );
}