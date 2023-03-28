"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
var _input = require("./input");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var TimeInput = function TimeInput(props) {
  return /*#__PURE__*/_react.default.createElement(_reactInputMask.default, {
    mask: "99:99",
    disabled: props.disabled,
    value: props.value,
    onChange: props.onChange,
    className: "form-control"
  });
};
exports.TimeInput = TimeInput;