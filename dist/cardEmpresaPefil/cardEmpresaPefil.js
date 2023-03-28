"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardPerfilEmpresa = void 0;
require("./styles.css");
var _fa = require("react-icons/fa");
var CardPerfilEmpresa = function CardPerfilEmpresa(props) {
  var empresa = props.empresa;
  var empresaGrupo = {
    empresaPai: '',
    grupos: []
  };
  empresa.grupoEmpresa.forEach(function (item, index) {
    if (index === 0) {
      empresaGrupo.empresaPai = item.nome;
    }
    ;
    if (index !== 0) {
      empresaGrupo.grupos.push(item.nome);
    }
    ;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "card-empresa"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header-empresa"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icone-empresa"
  }, /*#__PURE__*/React.createElement(_fa.FaBuilding, null)), /*#__PURE__*/React.createElement("span", {
    className: "title"
  }, /*#__PURE__*/React.createElement("strong", null, empresaGrupo.empresaPai))), /*#__PURE__*/React.createElement("div", {
    className: "card-body-empresa"
  }, /*#__PURE__*/React.createElement("span", {
    className: "grupo"
  }, /*#__PURE__*/React.createElement("strong", null, "Grupos")), /*#__PURE__*/React.createElement("ul", null, empresaGrupo.grupos.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, item);
  }))));
};
exports.CardPerfilEmpresa = CardPerfilEmpresa;