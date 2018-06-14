'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setAuthToken = function setAuthToken(token) {
    if (token) {
        // Apply to every request
        _axios2.default.defaults.headers.common['Authorization'] = token;
    } else {
        delete _axios2.default.defaults.headers.common['Authorization'];
    }
};

exports.default = setAuthToken;