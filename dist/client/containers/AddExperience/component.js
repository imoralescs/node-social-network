'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = AddExperience;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AddExperience(props) {
    var company = props.company,
        title = props.title,
        locationExperience = props.locationExperience,
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
            'Add Experience'
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
                    'company'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'company',
                    value: company,
                    onChange: _onChange }),
                _react2.default.createElement(
                    'span',
                    null,
                    errors.company ? errors.company : ''
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'title'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'title',
                    value: title,
                    onChange: _onChange }),
                _react2.default.createElement(
                    'span',
                    null,
                    errors.title ? errors.title : ''
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'location'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'locationExperience',
                    value: locationExperience,
                    onChange: _onChange }),
                _react2.default.createElement('span', null)
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