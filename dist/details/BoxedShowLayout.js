"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CompactShowLayout = _interopRequireDefault(require("./CompactShowLayout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const BoxedShowLayout = props => {
  return /*#__PURE__*/_react.default.createElement(_CompactShowLayout.default, _extends({}, props, {
    layoutComponentName: "RaBox"
  }));
};

BoxedShowLayout.propTypes = Object.assign({}, _CompactShowLayout.default.propTypes);
var _default = BoxedShowLayout;
exports.default = _default;