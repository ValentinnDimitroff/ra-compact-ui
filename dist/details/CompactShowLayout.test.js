"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactAdmin = require("react-admin");

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _CompactShowLayout = _interopRequireDefault(require("./CompactShowLayout"));

var _RaBox = _interopRequireDefault(require("./RaBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { rest } from 'msw'
// import { setupServer } from 'msw/node'
test('renders correctly', async () => {
  // Arrange
  const record = {
    name: "John Doe",
    age: 23
  };
  const props = {
    layoutComponentName: "RaBox",
    children: /*#__PURE__*/_react.default.createElement(_RaBox.default, null, /*#__PURE__*/_react.default.createElement(_RaBox.default, null, /*#__PURE__*/_react.default.createElement(_reactAdmin.TextField, {
      source: "name"
    })), /*#__PURE__*/_react.default.createElement(_RaBox.default, null, /*#__PURE__*/_react.default.createElement(_reactAdmin.NumberField, {
      source: "age"
    }))),
    record,
    resource: "users",
    basePath: "/users",
    version: 1
  };
  const {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_CompactShowLayout.default, props)); // Act
  // Assert

  expect(getByText(record.name)).toBeInTheDocument();
  expect(getByText(record.age.toString())).toBeInTheDocument();
});