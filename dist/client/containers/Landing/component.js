'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Landing;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('../../components/layout/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('../../components/layout/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Landing(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, props),
        _react2.default.createElement(
            'h1',
            null,
            'Landing pages'
        ),
        _react2.default.createElement(_Footer2.default, null)
    );
}