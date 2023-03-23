import FusoHorarioService from '../../services/fusoHorario';
import { minutosParaHoras } from '../../helpers/formatacoes/horas'

const loadFusos = async () => {
  let lista = []
  const fusoHorarioService = new FusoHorarioService()
  const response = await fusoHorarioService.get()
  for (let index = 0; index < response.data.length; index++) {
    const element = response.data[index];
    let descricao = `${element.descricao} (UTC ${minutosParaHoras(element.hora.hours*60)})`
    lista.push({value: element.id, label: descricao})
  }
  return lista
}

const TimeZone = async () => {
  return await loadFusos()
}

export default TimeZone;