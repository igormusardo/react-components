"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcularDiferencaEntreDatas = calcularDiferencaEntreDatas;
exports.dateToEn = dateToEn;
exports.formatarData = formatarData;
exports.formatarDataToUtc = formatarDataToUtc;
exports.formatoDataSistema = exports.formatoDataHoraSegundo = exports.formatoData = void 0;
exports.juntarDataHora = juntarDataHora;
exports.somarFusoHorario = somarFusoHorario;
exports.somarFusoHorarioTemp = somarFusoHorarioTemp;
exports.subtrairFusoHorario = subtrairFusoHorario;
var _dateFns = require("date-fns");
var _dateFnsTz = require("date-fns-tz");
var formatoData = "dd/MM/yyyy";
exports.formatoData = formatoData;
var formatoDataHoraMinuto = "dd/MM/yyyy HH:mm";
var formatoDataHoraSegundo = "dd/MM/yyyy HH:mm:ss";
exports.formatoDataHoraSegundo = formatoDataHoraSegundo;
var formatoDataSistema = "yyyy-MM-dd HH:mm:ss";
exports.formatoDataSistema = formatoDataSistema;
function dateToEn(date) {
  var arrayDataHora = date.split(' ');
  return arrayDataHora[0].split('/').reverse().join('-') + ' ' + arrayDataHora[1];
}
function juntarDataHora(data, hora) {
  var espaco = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (espaco) {
    return data + ' ' + hora;
  } else {
    return data + 'T' + hora;
  }
}
function formatarData(date) {
  var formato = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : formatoDataHoraMinuto;
  var fusoHorario = arguments.length > 2 ? arguments[2] : undefined;
  if (date != null) {
    if (new Date(date) != 'Invalid Date') {
      var str_timezone = "-0".concat(Math.abs(fusoHorario[0].hora.hours), ":00");
      if (fusoHorario[0].hora.hours >= 0) {
        str_timezone = "0".concat(Math.abs(fusoHorario[0].hora.hours), ":00");
      }
      var zonedTime = (0, _dateFnsTz.utcToZonedTime)(date, str_timezone);
      return (0, _dateFnsTz.format)(zonedTime, formato);
    } else {
      throw "Data Inválida";
    }
  }
}
function formatarDataToUtc(date) {
  var formato = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : formatoDataSistema;
  var fusoHorario = arguments.length > 2 ? arguments[2] : undefined;
  if (date != null) {
    var horaFuso = fusoHorario[0].hora.hours;
    if (horaFuso < 0) {
      horaFuso = Math.abs(horaFuso);
    } else {
      horaFuso = -horaFuso;
    }
    try {
      return (0, _dateFnsTz.format)(new Date(new Date(date).getTime() + horaFuso * 60 * 60 * 1000), formato);
    } catch (e) {
      throw "Data Inválida";
    }
  }
}

// function inicioDoDiaDeOntem(){
//   return parse(formatarData(startOfYesterday()))
// }

function subtrairFusoHorario(timestampStr) {
  // return formatnovo(timestampStr, 'yyyy-MM-dd HH:mm:ss', { timeZone: 'America/Sao_Paulo' })
  try {
    return new Date(timestampStr.getTime() - timestampStr.getTimezoneOffset() * 60 * 1000);
  } catch (e) {
    throw "Data Inválida";
  }
}
;
function somarFusoHorario(timestampStr) {
  return timestampStr;
}
function somarFusoHorarioTemp(timestampStr) {
  try {
    return new Date(timestampStr.getTime() + timestampStr.getTimezoneOffset() * 60 * 1000);
  } catch (e) {
    return undefined;
  }
}
;
function calcularDiferencaEntreDatas(data_inicial, data_final) {
  try {
    return (0, _dateFns.differenceInMinutes)(data_final, data_inicial);
  } catch (e) {
    return undefined;
  }
}