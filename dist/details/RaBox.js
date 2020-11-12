"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RaBox = props => /*#__PURE__*/_react.default.createElement(_Box.default, props);

RaBox.displayName = "RaBox";
var _default = RaBox;
exports.default = _default;