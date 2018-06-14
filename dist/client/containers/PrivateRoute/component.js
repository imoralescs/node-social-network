'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrivateRoute = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateRoute = exports.PrivateRoute = function PrivateRoute(props) {
    console.log(props);
    /*
    return(<Route
        {...rest}
        render = {props => 
            auth.isAuthenticated === true 
                ? (<Component {...props} />) 
                : (<Redirect to='/login' />
            )}/>)
    */
    return _react2.default.createElement(
        'div',
        null,
        'h'
    );
};