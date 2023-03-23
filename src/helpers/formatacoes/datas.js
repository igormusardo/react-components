import { differenceInMinutes } from 'date-fns'
import { format as formatnovo, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz'

const formatoData = "dd/MM/yyyy";
const formatoDataHoraMinuto = "dd/MM/yyyy HH:mm";
const formatoDataHoraSegundo = "dd/MM/yyyy HH:mm:ss";
const formatoDataSistema = "yyyy-MM-dd HH:mm:ss";

function dateToEn(date){
  let arrayDataHora = date.split(' ');
	return arrayDataHora[0].split('/').reverse().join('-')+' '+arrayDataHora[1];
}

function juntarDataHora(data, hora, espaco=false){
  if (espaco){
    return data + ' ' +hora;
  } else {
    return data + 'T' +hora;
  }

}

function formatarData(date, formato=formatoDataHoraMinuto, fusoHorario){
  if (date != null){
    if (new Date(date) != 'Invalid Date'){
      let str_timezone = `-0${Math.abs(fusoHorario[0].hora.hours)}:00`
      if (fusoHorario[0].hora.hours >= 0) {
        str_timezone = `0${Math.abs(fusoHorario[0].hora.hours)}:00`
      }
      const zonedTime = utcToZonedTime(date, str_timezone)
      return formatnovo(zonedTime, formato)
    }else{
      throw "Data Inválida";
    }
  }
}

function formatarDataToUtc(date, formato=formatoDataSistema, fusoHorario){
  if (date != null){
    let horaFuso = fusoHorario[0].hora.hours
    if (horaFuso < 0){
      horaFuso = Math.abs(horaFuso)
    } else {
      horaFuso = -horaFuso
    }

    try{
      return formatnovo(new Date(new Date(date).getTime() + horaFuso * 60 * 60 * 1000), formato)
    } catch (e){
      throw "Data Inválida";
    }
  }
}

// function inicioDoDiaDeOntem(){
//   return parse(formatarData(startOfYesterday()))
// }

function subtrairFusoHorario(timestampStr) {
  // return formatnovo(timestampStr, 'yyyy-MM-dd HH:mm:ss', { timeZone: 'America/Sao_Paulo' })
  try{
    return new Date(timestampStr.getTime() - timestampStr.getTimezoneOffset() * 60 * 1000);
  } catch (e){
    throw "Data Inválida";
  }
};

function somarFusoHorario(timestampStr) {
  return timestampStr;
}
function somarFusoHorarioTemp(timestampStr) {
  try{
    return new Date(timestampStr.getTime() + timestampStr.getTimezoneOffset() * 60 * 1000);
  } catch (e){
    return undefined;
  }

};

function calcularDiferencaEntreDatas(data_inicial, data_final){
  try{
    return differenceInMinutes(data_final, data_inicial)
  } catch (e){
    return undefined;
  }
}

export {
    dateToEn,
    formatarData,
    formatarDataToUtc,
    juntarDataHora,
    subtrairFusoHorario,
    somarFusoHorario,
    somarFusoHorarioTemp,
    // inicioDoDiaDeOntem,
    formatoData,
    formatoDataHoraSegundo,
    formatoDataSistema,
    calcularDiferencaEntreDatas,
}
