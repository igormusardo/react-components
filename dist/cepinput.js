"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CepInput = function CepInput(props) {
  return /*#__PURE__*/_react.default.createElement(_reactInputMask.default, {
    mask: "99999-999",
    value: props.value,
    onChange: props.onChange,
    className: "form-control"
  });
};
var _default = CepInput;
exports.default = _default;