'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Profiles;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Navbar = require('../../components/layout/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('../../components/layout/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Profile = require('../Profile');

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Profiles(props) {
    console.log(props.state.profile.profiles);
    var profileItems = void 0;

    if (props.state.profile.profiles === null) {
        profileItems = _react2.default.createElement(
            'h2',
            null,
            'Loading...'
        );
    } else {
        if (props.state.profile.profiles.length > 0) {
            profileItems = props.state.profile.profiles.map(function (profile) {
                return _react2.default.createElement(
                    'li',
                    { key: profile._id },
                    _react2.default.createElement(
                        'span',
                        null,
                        profile.user.name
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/profiles/view' },
                        'View Profile'
                    )
                );
            });
        } else {
            profileItems = _react2.default.createElement(
                'h2',
                null,
                'No profiles found...'
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
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/profiles', render: function render() {
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'h1',
                            null,
                            'Developer Profiles'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Browse and connect with developers'
                        ),
                        _react2.default.createElement(
                            'ul',
                            null,
                            profileItems
                        )
                    );
                } }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/profiles/view', component: _Profile2.default })
        ),
        _react2.default.createElement(_Footer2.default, null)
    );
}