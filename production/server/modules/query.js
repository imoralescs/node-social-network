'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import merge from 'lodash.merge'
var testData = { message: 'hello'

  // Meta Programming, process that create programming code.
  // These are generic methods used in the generic controllers for all models
};var controllers = exports.controllers = {
  createOne: function createOne(model, body) {
    return model.create(body);
  },
  updateOne: function updateOne(docToUpdate, update) {
    merge(docToUpdate, update);
    return docToUpdate.save();
  },
  deleteOne: function deleteOne(docToDelete) {
    return docToDelete.remove();
  },
  getOne: function getOne(docToGet) {
    return Promise.resolve(docToGet);
  },
  getAll: function getAll(model) {
    return model.find({});
  },
  findByParam: function findByParam(model, id) {
    return model.findById(id).exec();
  }
};

var createOne = exports.createOne = function createOne(model) {
  return function (req, res, next) {
    return controllers.createOne(model, req.body).then(function (doc) {
      return res.status(201).json(doc);
    }).catch(function (error) {
      return next(error);
    });
  };
};

var updateOne = exports.updateOne = function updateOne(model) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var docToUpdate, update;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              docToUpdate = req.docFromId;
              update = req.body;
              return _context.abrupt('return', controllers.updateOne(docToUpdate, update).then(function (doc) {
                return res.status(201).json(doc);
              }).catch(function (error) {
                return next(error);
              }));

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var deleteOne = exports.deleteOne = function deleteOne(model) {
  return function (req, res, next) {
    return controllers.deleteOne(req.docFromId).then(function (doc) {
      return res.status(201).json(doc);
    }).catch(function (error) {
      return next(error);
    });
  };
};

var getOne = exports.getOne = function getOne(model) {
  return function (req, res, next) {
    return controllers.getOne(req.docFromId).then(function (doc) {
      return res.status(200).json(doc);
    }).catch(function (error) {
      return next(error);
    });
  };
};

var getAll = exports.getAll = function getAll(model) {
  return function (req, res, next) {
    return controllers.getAll(model).then(function (docs) {
      return res.json(docs);
    }).catch(function (error) {
      return next(error);
    });
  };
};

var findByParam = exports.findByParam = function findByParam(model) {
  return function (req, res, next, id) {
    return controllers.findByParam(model, id).then(function (doc) {
      if (!doc) {
        next(new Error('Not Found Error'));
      } else {
        req.docFromId = doc;
        next();
      }
    }).catch(function (error) {
      next(error);
    });
  };
};

// Default generateControllers()
var generateControllers = exports.generateControllers = function generateControllers(model) {
  var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var defaults = {
    findByParam: findByParam(model),
    getAll: getAll(model),
    getOne: getOne(model),
    deleteOne: deleteOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
  };

  return _extends({}, defaults, overrides);
};