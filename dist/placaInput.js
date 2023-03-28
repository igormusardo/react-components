"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlacaInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PlacaInput = function PlacaInput(props) {
  return /*#__PURE__*/_react.default.createElement(_reactInputMask.default, {
    mask: "***-****",
    disabled: props.disabled,
    value: props.value,
    onChange: props.onChange,
    onBlur: props.onBlur,
    className: "form-control",
    style: {
      "text-transform": "uppercase"
    },
    maskChar: "_"
  });
};
exports.PlacaInput = PlacaInput;