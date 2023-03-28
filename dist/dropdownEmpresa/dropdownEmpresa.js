"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownEmpresa = void 0;
require("./styles.css");
var _react = require("react");
var _auth = require("../../../src/services/auth");
var _fa = require("react-icons/fa");
var _dropdownItem = require("./dropdownItem");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DropdownEmpresa = function DropdownEmpresa(_ref) {
  var onChange = _ref.onChange,
    valorGrupoEmpresa = _ref.valorGrupoEmpresa,
    grupoEmpresa = _ref.grupoEmpresa;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    aberto = _useState2[0],
    setAberto = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    arvoreEmpresa = _useState4[0],
    setArvoreEmpresa = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    dadosPequisa = _useState6[0],
    setDadosPesquisa = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    empresaAtual = _useState8[0],
    setEmpresaAtual = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    check = _useState10[0],
    setCheck = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    valorEmpresaAtual = _useState12[0],
    setValorEmpresaAtual = _useState12[1];
  var dropdownRef = (0, _react.useRef)(null);
  var checkElemento = function checkElemento() {
    var empresasRenderizadas = document.querySelectorAll(".dropdown-body .empresa-container label input[type='radio']");
    var empresaSelecionada = valorEmpresaAtual ? valorEmpresaAtual : (0, _auth.getGrupoEmpresaAtual)();
    if (valorEmpresaAtual) {
      empresaSelecionada = valorEmpresaAtual;
    }
    ;
    if (valorGrupoEmpresa && !valorEmpresaAtual) {
      empresaSelecionada = valorGrupoEmpresa;
    }
    ;
    if (!valorEmpresaAtual && valorGrupoEmpresa > 0) {
      empresaSelecionada = (0, _auth.getGrupoEmpresaAtual)();
    }
    ;
    if (!valorEmpresaAtual && valorGrupoEmpresa == 0) {
      empresaSelecionada = valorGrupoEmpresa;
    }
    empresasRenderizadas.forEach(function (item) {
      if (empresaSelecionada || empresaSelecionada === valorGrupoEmpresa) {
        setCheck(true);
        var keyElemento = item.getAttribute("data-key");
        if (empresaSelecionada == keyElemento) {
          item.setAttribute("checked", check);
        }
        ;
      }
      ;
    });
  };
  var abrirDropdown = function abrirDropdown() {
    setAberto(!aberto);
  };
  var clickForaDropdown = function clickForaDropdown(event) {
    if (dropdownRef.current !== null && !dropdownRef.current.contains(event.target)) {
      setAberto(false);
    }
    ;
  };
  (0, _react.useEffect)(function () {
    checkElemento();
  }, [aberto]);
  (0, _react.useEffect)(function () {
    var empresas = grupoEmpresa;
    for (var index = 0; index < empresas.length; index++) {
      if (empresas[index].children.length > 0) {
        empresas[index].children.forEach(function (item) {
          empresas = [].concat(_toConsumableArray(empresas), [item]);
        });
      }
    }
    ;
    var empresaSelecionada = valorGrupoEmpresa ? valorGrupoEmpresa : (0, _auth.getGrupoEmpresaAtual)();
    var nomeEmpresa = (0, _auth.getNomeEmpresaAtual)();
    if (nomeEmpresa === null) {
      empresas.forEach(function (empresa) {
        if (empresa.value == empresaSelecionada) {
          setEmpresaAtual(empresa.label);
        }
        ;
      });
    } else {
      if (nomeEmpresa) {
        empresas.forEach(function (empresa) {
          if (empresa.value == empresaSelecionada && empresa.label !== nomeEmpresa) {
            (0, _auth.setNomeEmpresaAtual)(empresa.label);
            setEmpresaAtual(empresa.label);
          }
          ;
          if (empresa.value == empresaSelecionada && empresa.label == nomeEmpresa) {
            setEmpresaAtual(empresa.label);
          }
          ;
          if (empresa.value == 0) {
            setEmpresaAtual(empresa.label);
          }
          ;
        });
      }
      ;
    }
    ;
  }, []);
  (0, _react.useEffect)(function () {
    getEmpresas();
    document.addEventListener('click', clickForaDropdown);
  }, []);
  var empresasFiltradas = [];
  var todasEmpresas = grupoEmpresa;
  var _loop = function _loop() {
    if (todasEmpresas[index].id_pai == null || todasEmpresas[index].id_pai == undefined || todasEmpresas[index].id_pai == "") {
      var id_pai = todasEmpresas[index].value;
      todasEmpresas[index].id_pai = id_pai;
    }
    ;
    if (todasEmpresas[index].children.length >= 0) {
      var _id_pai = todasEmpresas[index].id_pai;
      todasEmpresas[index].children.forEach(function (empresa) {
        empresa.id_pai = _id_pai;
        todasEmpresas = [].concat(_toConsumableArray(todasEmpresas), [empresa]);
      });
    }
    ;
  };
  for (var index = 0; index < todasEmpresas.length; index++) {
    _loop();
  }
  ;
  if (dadosPequisa.length > 0) {
    empresasFiltradas = todasEmpresas.filter(function (empresa) {
      return empresa.label.toLocaleLowerCase().includes(dadosPequisa.toLocaleLowerCase());
    });
  }
  ;
  var empresasUnicas = new Map();
  empresasFiltradas.forEach(function (item) {
    if (!empresasUnicas.has(item.id_pai)) {
      empresasUnicas.set(item.id_pai, item);
    }
    ;
  });
  var empresasPai = _toConsumableArray(empresasUnicas.values());
  var renderizarPai = function renderizarPai(item, index) {
    var _grupoEmpresa$filter = grupoEmpresa.filter(function (emp) {
        if (item.id_pai == emp.id_pai) {
          return emp;
        }
      }),
      _grupoEmpresa$filter2 = _slicedToArray(_grupoEmpresa$filter, 1),
      result = _grupoEmpresa$filter2[0];
    return /*#__PURE__*/React.createElement(_dropdownItem.DropdownItem, {
      onchange: onChange,
      setValorEmpresaAtual: setValorEmpresaAtual,
      setEmpresaAtual: setEmpresaAtual,
      testekey: index,
      item: result
    });
  };
  function getEmpresas() {
    setArvoreEmpresa(grupoEmpresa);
  }
  ;
  return /*#__PURE__*/React.createElement("div", {
    ref: dropdownRef,
    className: "dropdown-empresa-container"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: abrirDropdown,
    className: "dropdown-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "header-empresa"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icone-empresa"
  }, /*#__PURE__*/React.createElement(_fa.FaBuilding, null)), /*#__PURE__*/React.createElement("span", {
    className: "empresa-selecionada"
  }, empresaAtual)), /*#__PURE__*/React.createElement(_fa.FaSyncAlt, {
    className: "icone-atualiza",
    onClick: abrirDropdown
  })), aberto && /*#__PURE__*/React.createElement("div", {
    className: "dropdown-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    onChange: function onChange(event) {
      return setDadosPesquisa(event.target.value);
    },
    value: dadosPequisa
  }), /*#__PURE__*/React.createElement(_fa.FaSearch, {
    className: "icone-lupa"
  })), dadosPequisa.length > 0 ? empresasPai.map(function (item, index) {
    return renderizarPai(item, index);
  }) : grupoEmpresa.map(function (item, index) {
    return /*#__PURE__*/React.createElement(_dropdownItem.DropdownItem, {
      setValorEmpresaAtual: setValorEmpresaAtual,
      onchange: onChange,
      setEmpresaAtual: setEmpresaAtual,
      key: index,
      item: item
    });
  })));
};
exports.DropdownEmpresa = DropdownEmpresa;