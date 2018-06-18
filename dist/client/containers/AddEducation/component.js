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
        _onCheckboxChange = props._onCheckboxChange,
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
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'school'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'school',
                    value: school,
                    onChange: _onChange }),
                _react2.default.createElement(
                    'span',
                    null,
                    errors.school ? errors.school : ''
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'degree'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'degree',
                    value: degree,
                    onChange: _onChange }),
                _react2.default.createElement(
                    'span',
                    null,
                    errors.degree ? errors.degree : ''
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'field of study'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'fieldofstudy',
                    value: fieldofstudy,
                    onChange: _onChange }),
                _react2.default.createElement(
                    'span',
                    null,
                    errors.fieldofstudy ? errors.fieldofstudy : ''
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'current',
                    _react2.default.createElement('input', {
                        type: 'checkbox',
                        name: 'current',
                        checked: current,
                        value: current,
                        onChange: _onCheckboxChange })
                ),
                _react2.default.createElement('span', null)
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'description',
                    _react2.default.createElement('textarea', {
                        value: description,
                        onChange: _onChange,
                        name: 'description' })
                ),
                _react2.default.createElement('span', null)
            ),
            _react2.default.createElement('input', { type: 'submit' })
        )
    );
}