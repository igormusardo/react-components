"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./styles.css");
var _fa = require("react-icons/fa");
var _react = require("react");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var PasswordCheck = function PasswordCheck(_ref) {
  var password = _ref.password,
    buttonAtivo = _ref.buttonAtivo;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    checkTamanho = _useState2[0],
    setCheckTamanho = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    checkNumero = _useState4[0],
    setCheckNumero = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    checkLetraMinuscula = _useState6[0],
    setCheckLetraMinuscula = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    checkLetraMaiscula = _useState8[0],
    setCheckLetraMaiscula = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    checkCaracterEspecial = _useState10[0],
    setCheckCaracterEspecial = _useState10[1];
  (0, _react.useEffect)(function () {
    if (password !== undefined) {
      validandoPassword();
    }
    ;
  }, [password]);
  var validandoPassword = function validandoPassword() {
    var tamanhoPassword = password.length >= 8;
    var regexNumero = /^(?=.*[0-9]).+$/.test(password);
    var regexLetraMinuscula = /^(?=.*[a-z]).+$/.test(password);
    var regexLetraMaiscula = /^(?=.*[A-Z]).+$/.test(password);
    var regexCaracterEspecial = /[!^;,.<>\[\]\{\}\/\\()\\-\\_=+@#$%^&?~*]/.test(password);
    tamanhoPassword ? setCheckTamanho(true) : setCheckTamanho(false);
    regexNumero ? setCheckNumero(true) : setCheckNumero(false);
    regexLetraMinuscula ? setCheckLetraMinuscula(true) : setCheckLetraMinuscula(false);
    regexLetraMaiscula ? setCheckLetraMaiscula(true) : setCheckLetraMaiscula(false);
    regexCaracterEspecial ? setCheckCaracterEspecial(true) : setCheckCaracterEspecial(false);
    if (tamanhoPassword && regexNumero && regexLetraMinuscula && regexLetraMaiscula && regexCaracterEspecial) {
      buttonAtivo(true);
    } else {
      buttonAtivo(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "passwordcheck-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "check-title"
  }, "A nova senha deve seguir os crit\xE9rios:"), /*#__PURE__*/React.createElement("div", {
    className: "check-item"
  }, checkTamanho == true ? /*#__PURE__*/React.createElement(_fa.FaCheck, {
    className: "check"
  }) : /*#__PURE__*/React.createElement(_fa.FaPlus, {
    className: "plus"
  }), /*#__PURE__*/React.createElement("span", null, "Conter tamanho m\xEDnimo de 8 caractere")), /*#__PURE__*/React.createElement("div", {
    className: "check-item"
  }, checkLetraMinuscula == true ? /*#__PURE__*/React.createElement(_fa.FaCheck, {
    className: "check"
  }) : /*#__PURE__*/React.createElement(_fa.FaPlus, {
    className: "plus"
  }), /*#__PURE__*/React.createElement("span", null, "Conter no m\xEDnimo 1 letra min\xFAscula")), /*#__PURE__*/React.createElement("div", {
    className: "check-item"
  }, checkLetraMaiscula == true ? /*#__PURE__*/React.createElement(_fa.FaCheck, {
    className: "check"
  }) : /*#__PURE__*/React.createElement(_fa.FaPlus, {
    className: "plus"
  }), /*#__PURE__*/React.createElement("span", null, "Conter no m\xEDnimo 1 letra mai\xFAscula")), /*#__PURE__*/React.createElement("div", {
    className: "check-item"
  }, checkNumero == true ? /*#__PURE__*/React.createElement(_fa.FaCheck, {
    className: "check"
  }) : /*#__PURE__*/React.createElement(_fa.FaPlus, {
    className: "plus"
  }), /*#__PURE__*/React.createElement("span", null, "Conter no m\xEDnimo 1 n\xFAmero")), /*#__PURE__*/React.createElement("div", {
    className: "check-item"
  }, checkCaracterEspecial == true ? /*#__PURE__*/React.createElement(_fa.FaCheck, {
    className: "check"
  }) : /*#__PURE__*/React.createElement(_fa.FaPlus, {
    className: "plus"
  }), /*#__PURE__*/React.createElement("span", null, "Conter no m\xEDnimo 1 caractere especial")));
};
var _default = PasswordCheck;
exports.default = _default;