"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CBadge = _interopRequireDefault(require("@coreui/react/es/badge/CBadge"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var BadgeStatus = function BadgeStatus(props) {
  var color = "info";
  var title = "";
  if (props.color == undefined) {
    if (props.status == "Ativo" || props.status == 1) {
      color = "success";
      title = "Ativo";
    } else {
      color = "danger";
      title = "Desabilitado";
    }
  } else {
    color = props.color;
    title = props.title;
  }
  return /*#__PURE__*/_react.default.createElement(_CBadge.default, _extends({}, props, {
    color: color
  }), title);
};
var _default = BadgeStatus;
exports.default = _default;