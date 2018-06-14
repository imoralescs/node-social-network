'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Register;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('../../components/layout/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('../../components/layout/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Register(props) {
    var name = props.name,
        email = props.email,
        password = props.password,
        password2 = props.password2,
        errors = props.errors,
        _onChange = props._onChange,
        _onSubmit = props._onSubmit;


    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, props),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'h1',
                null,
                'Register'
            ),
            _react2.default.createElement(
                'form',
                { onSubmit: _onSubmit },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        'name'
                    ),
                    _react2.default.createElement('input', {
                        type: 'text',
                        name: 'name',
                        value: name,
                        onChange: _onChange }),
                    _react2.default.createElement(
                        'span',
                        null,
                        errors.name ? errors.name : ''
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        'email'
                    ),
                    _react2.default.createElement('input', {
                        type: 'email',
                        name: 'email',
                        value: email,
                        onChange: _onChange }),
                    _react2.default.createElement(
                        'span',
                        null,
                        errors.email ? errors.email : ''
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        'Password'
                    ),
                    _react2.default.createElement('input', {
                        type: 'password',
                        name: 'password',
                        value: password,
                        onChange: _onChange }),
                    _react2.default.createElement(
                        'span',
                        null,
                        errors.password ? errors.password : ''
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        null,
                        'Confirm Password'
                    ),
                    _react2.default.createElement('input', {
                        type: 'password',
                        name: 'password2',
                        value: password2,
                        onChange: _onChange }),
                    _react2.default.createElement(
                        'span',
                        null,
                        errors.password2 ? errors.password2 : ''
                    )
                ),
                _react2.default.createElement('input', { type: 'submit' })
            )
        ),
        _react2.default.createElement(_Footer2.default, null)
    );
}