'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Landing = require('./Landing');

var _Landing2 = _interopRequireDefault(_Landing);

var _Profiles = require('./Profiles');

var _Profiles2 = _interopRequireDefault(_Profiles);

var _Dashboard = require('./Dashboard');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('./Register');

var _Register2 = _interopRequireDefault(_Register);

var _PrivateRoute = require('./PrivateRoute');

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
            'div',
            { className: 'App' },
            _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Landing2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/register', component: _Register2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _Login2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/profiles', component: _Profiles2.default }),
                _react2.default.createElement(_PrivateRoute2.default, { path: '/dashboard', component: _Dashboard2.default })
            )
        )
    );
};

App.propTypes = {};

exports.default = App;