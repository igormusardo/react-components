"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactQuill = _interopRequireDefault(require("react-quill"));
var _reactstrap = require("reactstrap");
require("react-quill/dist/quill.snow.css");
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var configuracoes = {
  modules: {
    toolbar: [[{
      header: "2"
    }, {
      header: [3, 4, 5]
    }, {
      font: []
    }], [{
      size: []
    }], ["bold", "italic", "underline", "strike", "blockquote"], [{
      "list": "ordered"
    }, {
      "list": "bullet"
    }, {
      "indent": "-1"
    }, {
      "indent": "+1"
    }], ["link", "image", "video"]]
  },
  formats: ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "link", "image", "video"]
};
function EditorTexto(_ref) {
  var tituloPostagem = _ref.tituloPostagem,
    setTituloPostagem = _ref.setTituloPostagem,
    conteudoHtml = _ref.conteudoHtml,
    setConteudoHtml = _ref.setConteudoHtml,
    salvarPostagem = _ref.salvarPostagem,
    btnDesativado = _ref.btnDesativado;
  var inputRef = (0, _react.useRef)("");
  var history = (0, _reactRouterDom.useHistory)();
  (0, _react.useEffect)(function () {
    return inputRef.current.focus();
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "editor-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "editor-input-field"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "editor-titulo"
  }, "Titulo", /*#__PURE__*/_react.default.createElement("span", null, "*")), /*#__PURE__*/_react.default.createElement("input", {
    placeholder: "T\xEDtulo...",
    ref: inputRef,
    id: "editor-titulo",
    value: tituloPostagem,
    type: "text",
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return setTituloPostagem(target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("label", null, "Conte\xFAdo da postagem", /*#__PURE__*/_react.default.createElement("span", {
    className: "conteudo"
  }, "*")), /*#__PURE__*/_react.default.createElement(_reactQuill.default, {
    modules: configuracoes.modules,
    theme: "snow",
    value: conteudoHtml,
    onChange: setConteudoHtml
  }), /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    disabled: btnDesativado,
    onClick: salvarPostagem,
    className: "editor-btn-salvar",
    color: "primary"
  }, "Salvar"), /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
    onClick: function onClick() {
      return history.push("/bdc");
    },
    className: "editor-btn-salvar",
    color: "danger"
  }, "Cancelar"));
}
;
var _default = EditorTexto;
exports.default = _default;