'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Navbar = require('../components/layout/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Landing = require('../components/layout/Landing');

var _Landing2 = _interopRequireDefault(_Landing);

var _Footer = require('../components/layout/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Login = require('../components/auth/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Register = require('../components/auth/Register');

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'App' },
                    _react2.default.createElement(_Navbar2.default, null),
                    _react2.default.createElement(_reactRouterDom.Route, { exect: true, path: '/', component: _Landing2.default }),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/register', component: _Register2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _Login2.default })
                    ),
                    _react2.default.createElement(_Footer2.default, null)
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;