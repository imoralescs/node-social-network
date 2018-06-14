'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CreateProfile;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CreateProfile(props) {
    console.log(props);
    var handle = props.handle,
        status = props.status,
        company = props.company,
        website = props.website,
        profileLocation = props.profileLocation,
        skills = props.skills,
        githubusername = props.githubusername,
        bio = props.bio,
        displaySocialInput = props.displaySocialInput,
        facebook = props.facebook,
        twitter = props.twitter,
        linkedid = props.linkedid,
        youtube = props.youtube,
        instagram = props.instagram,
        _addSocialLink = props._addSocialLink,
        _onChange = props._onChange,
        _onSubmit = props._onSubmit,
        errors = props.errors;


    var socialInputs = void 0;
    if (displaySocialInput) {
        socialInputs = _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'facebook'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'facebook',
                    value: facebook,
                    onChange: _onChange }),
                _react2.default.createElement('span', null)
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'twitter'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'twitter',
                    value: twitter,
                    onChange: _onChange }),
                _react2.default.createElement('span', null)
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'linkedid'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'linkedid',
                    value: linkedid,
                    onChange: _onChange }),
                _react2.default.createElement('span', null)
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'youtube'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'youtube',
                    value: youtube,
                    onChange: _onChange }),
                _react2.default.createElement('span', null)
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'instagram'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'instagram',
                    value: instagram,
                    onChange: _onChange }),
                _react2.default.createElement('span', null)
            )
        );
    } else {
        socialInputs = '';
    }

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Login'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Let get some information to make your profile stand out'
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
                    'handle'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'handle',
                    value: handle,
                    onChange: _onChange }),
                _react2.default.createElement(
                    'span',
                    null,
                    errors.handle ? errors.handle : ''
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'status'
                ),
                _react2.default.createElement(
                    'select',
                    { value: status, onChange: _onChange },
                    _react2.default.createElement(
                        'option',
                        { value: 'developer' },
                        'Developer'
                    )
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    errors.status ? errors.status : ''
                )
            ),
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
                _react2.default.createElement('span', null)
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'website'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'website',
                    value: website,
                    onChange: _onChange }),
                _react2.default.createElement('span', null)
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
                    name: 'profileLocation',
                    value: profileLocation,
                    onChange: _onChange }),
                _react2.default.createElement('span', null)
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'skills'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'skills',
                    value: skills,
                    onChange: _onChange }),
                _react2.default.createElement(
                    'span',
                    null,
                    errors.skills ? errors.skills : ''
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'github username'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'githubusername',
                    value: githubusername,
                    onChange: _onChange }),
                _react2.default.createElement('span', null)
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'label',
                    null,
                    'bio',
                    _react2.default.createElement('textarea', { value: bio, onChange: _onChange, name: 'bio' })
                ),
                _react2.default.createElement('span', null)
            ),
            _react2.default.createElement(
                'button',
                { type: 'button', onClick: _addSocialLink },
                'Add Social Links'
            ),
            socialInputs,
            _react2.default.createElement('input', { type: 'submit' })
        )
    );
}