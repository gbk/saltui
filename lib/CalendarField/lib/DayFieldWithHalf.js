'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Context = require('../../Context');

var _Datetime = require('../../Datetime');

var _Datetime2 = _interopRequireDefault(_Datetime);

var _YearField2 = require('./YearField');

var _YearField3 = _interopRequireDefault(_YearField2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayFieldWithHalf = function (_YearField) {
  _inherits(DayFieldWithHalf, _YearField);

  function DayFieldWithHalf() {
    _classCallCheck(this, DayFieldWithHalf);

    return _possibleConstructorReturn(this, (DayFieldWithHalf.__proto__ || Object.getPrototypeOf(DayFieldWithHalf)).apply(this, arguments));
  }

  _createClass(DayFieldWithHalf, [{
    key: 'getExtraClassNames',
    value: function getExtraClassNames() {
      return (0, _Context.prefixClass)('day-with-half-calendar-field');
    }
  }, {
    key: 'getExtraProps',
    value: function getExtraProps() {
      return {
        columns: _Datetime2.default.YMDT
      };
    }
  }]);

  return DayFieldWithHalf;
}(_YearField3.default);

DayFieldWithHalf.displayName = 'DayFieldWithHalf';
exports.default = DayFieldWithHalf;
module.exports = exports['default'];