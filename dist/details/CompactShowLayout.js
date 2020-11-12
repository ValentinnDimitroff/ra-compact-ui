"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.compactShowLayoutPropTypes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAdmin = require("react-admin");

var _RaField = _interopRequireDefault(require("./RaField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const EMPTY_LAYOUT_NODE_ERROR = "Layout node has no found children! Nesting layout components should always end with a ra-field of any type!";

const sanitizeRestProps = (_ref) => {
  let rest = _objectWithoutPropertiesLoose(_ref, ["children", "className", "record", "resource", "basePath", "version", "initialValues", "translate"]);

  return rest;
};

const isLayoutComponent = (child, layoutComponentName) => {
  if (child == null) throw EMPTY_LAYOUT_NODE_ERROR;
  return child.type && child.type.displayName === layoutComponentName;
};

const recursivelyFindField = (_ref2) => {
  let {
    child,
    index
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, ["child", "index"]);

  if (isLayoutComponent(child, props.layoutComponentName)) {
    // Clone current layout element and continue traversing children
    return /*#__PURE__*/(0, _react.cloneElement)(child, {
      key: "RaShowLayoutKey-" + index,
      children: _react.Children.count(child.props.children) > 1 ? child.props.children.map(innerChild => recursivelyFindField(Object.assign({
        child: innerChild,
        index: index++
      }, props))) : recursivelyFindField(Object.assign({
        child: child.props.children,
        index: index++
      }, props))
    });
  } // Non-layout element found


  return /*#__PURE__*/_react.default.createElement(_RaField.default, _extends({
    field: child
  }, props));
};

const CompactShowLayout = (_ref3) => {
  let {
    layoutComponentName,
    basePath,
    className,
    children,
    record,
    resource,
    version
  } = _ref3,
      rest = _objectWithoutPropertiesLoose(_ref3, ["layoutComponentName", "basePath", "className", "children", "record", "resource", "version"]);

  const index = 0;
  return /*#__PURE__*/_react.default.createElement(_reactAdmin.CardContentInner, _extends({
    "aria-role": "",
    className: className,
    key: version
  }, sanitizeRestProps(rest)), _react.Children.map(children, child => child && /*#__PURE__*/(0, _react.isValidElement)(child) ? recursivelyFindField({
    layoutComponentName,
    child,
    record,
    resource,
    basePath,
    index
  }) : null));
};

const compactShowLayoutPropTypes = {
  basePath: _propTypes.default.string,
  record: _propTypes.default.object,
  resource: _propTypes.default.string,
  version: _propTypes.default.number,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  layoutComponentName: _propTypes.default.string
};
exports.compactShowLayoutPropTypes = compactShowLayoutPropTypes;
CompactShowLayout.propTypes = Object.assign({}, compactShowLayoutPropTypes);
var _default = CompactShowLayout;
exports.default = _default;