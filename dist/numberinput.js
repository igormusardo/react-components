"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInput = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactstrap = require("reactstrap");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var NumberInput = function NumberInput(props) {
  var _useState = (0, _react.useState)(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    valor = _useState2[0],
    setValor = _useState2[1];
  var _onChange = function _onChange(e) {
    var _e$target = e.target,
      value = _e$target.value,
      min = _e$target.min,
      max = _e$target.max;
    if (props.inteiro) {
      e.target.value = parseInt(value);
      setValor(parseInt(value));
    } else {
      value = parseFloat(value);
      setValor(parseFloat(value));
    }
    min = parseFloat(min);
    max = parseFloat(max);
    if ((Number.isNaN(min) || value >= min) && (Number.isNaN(max) || value <= max)) setValor(value);else if (!Number.isNaN(min) && value < min) setValor(min);else if (!Number.isNaN(max) && value > max) setValor(max);
    if (props.onChange) props.onChange(e);
  };
  var _onBlur = function _onBlur(e) {
    if (props.inteiro) {
      setValor(parseInt(e.target.value));
    } else {
      setValor(parseFloat(e.target.value));
    }
    if (props.onBlur) props.onBlur(e);
  };
  (0, _react.useEffect)(function () {
    // if (!value)
    setValor(props.value);
  }, [props.value]);
  return /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    innerRef: props.ref,
    value: valor,
    onChange: _onChange,
    onBlur: _onBlur,
    id: props.id,
    name: props.id,
    placeholder: props.placeholder,
    type: "number",
    min: props.min,
    max: props.max,
    onInput: function onInput(event) {
      if (props.inteiro) {
        setValor(parseInt(event.target.value));
      }
    }
  });
};
exports.NumberInput = NumberInput;