"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DecimalInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactCurrencyInputField = _interopRequireDefault(require("react-currency-input-field"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var DecimalInput = function DecimalInput(props) {
  return /*#__PURE__*/_react.default.createElement(_reactCurrencyInputField.default, {
    className: "form-control",
    defaultValue: props.value,
    decimalsLimit: 2,
    onValueChange: function onValueChange(value) {
      return props.onChange(value);
    }
  });
};
exports.DecimalInput = DecimalInput;