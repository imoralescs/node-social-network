'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _recompose = require('recompose');

var _redux = require('redux');

var _actions = require('../../store/actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isArray = function isArray(arr) {
  return toString.call(arr) === "[object Array]";
};

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)(actions, dispatch);
}

function handlers(WrappedComponent) {
  return function (_React$Component) {
    _inherits(_class2, _React$Component);

    function _class2() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        displaySocialInput: false,
        handle: _this.props.state.profile.profile.handle || '',
        company: _this.props.state.profile.profile.company || '',
        website: _this.props.state.profile.profile.website || '',
        profileLocation: _this.props.state.profile.profile.location || '',
        status: _this.props.state.profile.profile.status || 'developer',
        skills: _this.props.state.profile.profile.skills.join(',') || '',
        githubusername: _this.props.state.profile.profile.githubusername || '',
        bio: _this.props.state.profile.profile.bio || '',
        twitter: _this.props.state.profile.profile.twitter || '',
        facebook: _this.props.state.profile.profile.facebook || '',
        linkedin: _this.props.state.profile.profile.linkedin || '',
        youtube: _this.props.state.profile.profile.youtube || '',
        instagram: _this.props.state.profile.profile.instagram || '',
        errors: {}
      }, _this._onChange = function (event) {
        _this.setState(_defineProperty({}, event.target.name, event.target.value));
      }, _this._onSubmit = function (event) {
        event.preventDefault();

        var profileData = {
          handle: _this.state.handle,
          company: _this.state.company,
          website: _this.state.website,
          profileLocation: _this.state.profileLocation,
          status: _this.state.status,
          skills: _this.state.skills,
          githubusername: _this.state.githubusername,
          bio: _this.state.bio,
          twitter: _this.state.twitter,
          facebook: _this.state.facebook,
          linkedin: _this.state.linkedin,
          youtube: _this.state.youtube,
          instagram: _this.state.instagram
        };

        _this.props.createProfile(profileData, _this.props.history);
      }, _this._addSocialLink = function () {

        _this.setState({
          displaySocialInput: !_this.state.displaySocialInput
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class2, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.state.error !== this.props.state.error) {
          this.setState({
            errors: nextProps.state.error.errors
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.state, this.props, {
          _onChange: this._onChange,
          _onSubmit: this._onSubmit,
          _addSocialLink: this._addSocialLink
        }));
      }
    }]);

    return _class2;
  }(_react2.default.Component);
}

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), handlers);