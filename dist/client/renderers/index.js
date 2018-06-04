'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _regeneratorRuntime = require('regenerator-runtime');

var _regeneratorRuntime2 = _interopRequireDefault(_regeneratorRuntime);

var _App = require('../containers/App');

var _App2 = _interopRequireDefault(_App);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var serverRender = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime2.default.mark(function _callee() {
        var response;
        return _regeneratorRuntime2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _axios2.default.get(_config2.default.development + '/api/profile/all');

                    case 2:
                        response = _context.sent;
                        return _context.abrupt('return', {
                            initialMarkup: _server2.default.renderToString(_react2.default.createElement(_App2.default, null)),
                            initialData: {
                                data: response.data
                            }
                        });

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function serverRender() {
        return _ref.apply(this, arguments);
    };
}();

exports.default = serverRender;