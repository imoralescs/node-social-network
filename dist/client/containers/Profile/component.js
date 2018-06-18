'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Profile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('../../components/layout/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('../../components/layout/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Profile(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Profile'
        )
    );
}