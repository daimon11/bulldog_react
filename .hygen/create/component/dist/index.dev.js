"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  prompt: function prompt(_ref) {
    var inquirer = _ref.inquirer;
    var questions = [{
      type: 'input',
      name: 'component_name',
      message: 'Имя компонента'
    }, {
      type: 'input',
      name: 'dir',
      message: 'Вложенная директория?(Optional)'
    }];
    return inquirer.prompt(questions).then(function (answers) {
      var component_name = answers.component_name,
          dir = answers.dir;
      var path = "".concat(dir ? "".concat(dir, "/") : '').concat(component_name);
      var absPath = "src/components/".concat(path);
      return _objectSpread({}, answers, {
        path: path,
        absPath: absPath
      });
    });
  }
};