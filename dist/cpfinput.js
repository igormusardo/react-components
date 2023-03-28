"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CpfInput = function CpfInput(props) {
  return /*#__PURE__*/_react.default.createElement(_reactInputMask.default, {
    mask: "999.999.999-99",
    value: props.value,
    onChange: props.onChange,
    className: "form-control",
    maskChar: "_"
  });
};
var _default = CpfInput;
exports.default = _default;