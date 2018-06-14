'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AddEducation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AddEducation(props) {
    console.log(props);
    var school = props.school,
        degree = props.degree,
        fieldofstudy = props.fieldofstudy,
        from = props.from,
        to = props.to,
        current = props.current,
        description = props.description,
        disabled = props.disabled,
        _onChange = props._onChange,
        _onSubmit = props._onSubmit,
        errors = props.errors;


    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Add Education'
        ),
        _react2.default.createElement(
            'form',
            { onSubmit: _onSubmit },
            _react2.default.createElement('input', { type: 'submit' })
        )
    );
}