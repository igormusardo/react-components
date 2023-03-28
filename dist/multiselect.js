"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactSelect = _interopRequireDefault(require("react-select"));
var _ = require("./");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MultiSelect = function MultiSelect(props) {
  var converterOptions = function converterOptions() {
    var options = [];
    props.options.map(function (item) {
      options.push({
        value: item.id,
        label: item[props.campoDescricao]
      });
    });
    return options;
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactSelect.default, {
    options: converterOptions(),
    defaultValue: props.defaultValue || [],
    isDisabled: props.disabled,
    isMulti: true,
    isSearchable: true,
    placeholder: "Selecione...",
    onChange: function onChange(e) {
      var options = [];
      if (e) {
        e.map(function (item) {
          var obj = {
            id: item.value
          };
          obj[props.campoDescricao] = item.label;
          options.push(obj);
        });
      }
      if (props.onChange) {
        props.onChange(options);
      }
    }
  }));
};
exports.MultiSelect = MultiSelect;