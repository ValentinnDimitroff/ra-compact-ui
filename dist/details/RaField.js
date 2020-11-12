"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RaField = ({
  field,
  record,
  resource,
  basePath
}) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    key: field.props.source,
    className: (0, _classnames.default)("ra-field ra-field-" + field.props.source, field.props.className)
  }, field.props.addLabel ? /*#__PURE__*/_react.default.createElement(_reactAdmin.Labeled, {
    record: record,
    resource: resource,
    basePath: basePath,
    label: field.props.label,
    source: field.props.source,
    disabled: false
  }, field) : typeof field.type === 'string' ? field : /*#__PURE__*/_react.default.cloneElement(field, {
    record,
    resource,
    basePath
  }));
};

RaField.propTypes = {
  basePath: _propTypes.default.string,
  record: _propTypes.default.object,
  resource: _propTypes.default.string,
  field: _propTypes.default.object
};
var _default = RaField;
exports.default = _default;