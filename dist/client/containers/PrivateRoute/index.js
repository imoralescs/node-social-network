'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
    var Component = _ref.component,
        auth = _ref.auth,
        rest = _objectWithoutProperties(_ref, ['component', 'auth']);

    return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
        render: function render(props) {
            return auth.isAuthenticated === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
        } }));
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PrivateRoute);