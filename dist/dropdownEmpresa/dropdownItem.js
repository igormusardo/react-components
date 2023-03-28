"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItem = void 0;
var _react = require("react");
var _fa = require("react-icons/fa");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DropdownItem = function DropdownItem(_ref) {
  var item = _ref.item,
    onchange = _ref.onchange,
    setEmpresaAtual = _ref.setEmpresaAtual,
    setValorEmpresaAtual = _ref.setValorEmpresaAtual;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    aberto = _useState2[0],
    setAberto = _useState2[1];
  var atualizarOsDados = function atualizarOsDados(event) {
    onchange(event, item);
    setEmpresaAtual(item.label);
    setValorEmpresaAtual(item.value);
  };
  if (item.children.length > 0) {
    return /*#__PURE__*/React.createElement("div", {
      className: aberto ? "open empresa-container" : "empresa-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "empresa-pai"
    }, /*#__PURE__*/React.createElement("label", {
      className: "label-empresa"
    }, /*#__PURE__*/React.createElement("input", {
      disabled: item.disabled,
      "data-key": item.value,
      onChange: atualizarOsDados,
      type: "radio",
      name: "empresa"
    }), /*#__PURE__*/React.createElement("span", {
      title: item.label
    }, item.label)), /*#__PURE__*/React.createElement(_fa.FaAngleDown, {
      onClick: function onClick() {
        return setAberto(!aberto);
      },
      className: aberto ? "open btn-arrowdown" : "btn-arrowdown"
    })), /*#__PURE__*/React.createElement("div", {
      className: "empresa-filha"
    }, item.children.map(function (item, index) {
      return /*#__PURE__*/React.createElement(DropdownItem, {
        setValorEmpresaAtual: setValorEmpresaAtual,
        onchange: onchange,
        setEmpresaAtual: setEmpresaAtual,
        key: index,
        item: item
      });
    })));
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: aberto ? "open empresa-container" : "empresa-container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "empresa-pai"
    }, /*#__PURE__*/React.createElement("label", {
      className: "label-empresa"
    }, /*#__PURE__*/React.createElement("input", {
      disabled: item.disabled,
      "data-key": item.value,
      onChange: atualizarOsDados,
      type: "radio",
      name: "empresa"
    }), /*#__PURE__*/React.createElement("span", null, item.label))));
  }
  ;
};
exports.DropdownItem = DropdownItem;