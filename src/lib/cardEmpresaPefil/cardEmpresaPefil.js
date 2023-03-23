import './styles.css';
import { FaBuilding } from 'react-icons/fa';

export const CardPerfilEmpresa = (props) => {
  const empresa = props.empresa;
  
  const empresaGrupo = {
    empresaPai: '',
    grupos: []
  };

  empresa.grupoEmpresa.forEach((item, index) => {
    if(index === 0) {
      empresaGrupo.empresaPai = item.nome;
    };

    if(index !== 0) {
      empresaGrupo.grupos.push(item.nome);
    };
  });

  return(
    <div className='card-empresa'>
      <div className='card-header-empresa'>
        <div className='icone-empresa'>
          <FaBuilding />
        </div>
        <span className='title'><strong>{empresaGrupo.empresaPai}</strong></span>
      </div>
      <div className='card-body-empresa'>
        <span className='grupo'><strong>Grupos</strong></span>
        <ul>
          {empresaGrupo.grupos.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    </div>
  )
};
