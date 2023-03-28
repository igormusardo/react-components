"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimeInput = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
var _reactDom = require("react-dom");
var _datas = require("./helpers/formatacoes/datas");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DateTimeInput = function DateTimeInput(props) {
  var _useState = (0, _react.useState)(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    valor = _useState2[0],
    setValor = _useState2[1];
  var myInput = (0, _react.useRef)();
  var formatarDataUs = function formatarDataUs(dataInput) {
    var data = dataInput.split(" ")[0];
    var hora = dataInput.split(" ")[1];
    var dia = data.split('/')[0];
    var mes = data.split('/')[1];
    var ano = data.split('/')[2];
    try {
      return (0, _datas.formatarDataToUtc)(ano + '-' + mes + '-' + dia + ' ' + hora);
    } catch (e) {
      throw "Data Inválida";
    }
  };
  var formatarDataBr = function formatarDataBr(dataInput) {
    if (_typeof(dataInput) == 'object') {
      return (0, _datas.formatarData)(dataInput);
    } else if (dataInput.includes('T')) {
      return (0, _datas.formatarData)(dataInput);
    } else {
      try {
        var data = dataInput.split(" ")[0];
        var hora = dataInput.split(" ")[1];
        var ano = data.split('-')[0];
        var mes = data.split('-')[1];
        var dia = data.split('-')[2];
        return (0, _datas.formatarData)("".concat(ano, "-").concat(mes, "-").concat(dia, "T").concat(hora, "Z"));
      } catch (e) {
        return undefined;
      }
    }
  };
  var validarData = function validarData(dataInput) {
    try {
      var novaData = formatarDataUs(dataInput);
      return new Date(novaData) != 'Invalid Date';
    } catch (e) {
      return false;
    }
  };
  var onChange = function onChange(e) {
    setValor(e.target.value);
  };
  (0, _react.useEffect)(function () {
    if (props.value) {
      setValor(formatarDataBr(props.value));
    } else {
      setValor('');
    }
  }, [props.value]);
  var onBlur = function onBlur(e) {
    props.onChange(e.target.value);
    if (e.target.value != '') {
      try {
        var novaData = formatarDataUs(e.target.value);
        if (!validarData(e.target.value)) {
          if (props.erro) {
            props.erro('Data Inválida');
          } else {
            alert('Data Inválida');
          }
          myInput.focus();
          e.target.value = '';
        } else {
          if (props.onChange) {
            props.onChange(novaData);
          }
        }
      } catch (e) {
        myInput.focus();
        if (props.erro) {
          props.erro('Data Inválida');
        } else {
          alert('Data Inválida');
        }
      }
    } else {
      props.onChange(null);
    }
  };
  var formatChars = {
    n: '[0-1]',
    m: '[0-9]',
    e: '[0-3]',
    d: '[0-9]',
    z: '[1-2]',
    y: '[0-9]',
    h: '[0-2]',
    j: '[0-6]'
  };
  return /*#__PURE__*/_react.default.createElement(_reactInputMask.default, {
    formatChars: formatChars,
    mask: "ed/nm/zyyy hd:jd"
    // mask="99/99/9999 99:99" 
    ,
    value: valor,
    onChange: onChange,
    onBlur: onBlur,
    className: "form-control"
    // ref={myInp ut}
    // ref={(el) => { myInput = el; }}
    ,
    ref: function ref(_ref) {
      return myInput = (0, _reactDom.findDOMNode)(_ref);
    }
  });
};
exports.DateTimeInput = DateTimeInput;