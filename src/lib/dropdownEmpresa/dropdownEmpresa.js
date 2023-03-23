import "./styles.css";
import { useState, useEffect, useRef } from "react"
import { getGrupoEmpresaAtual, getNomeEmpresaAtual, setNomeEmpresaAtual} from "../../../src/services/auth"
import { FaSyncAlt, FaBuilding, FaSearch } from "react-icons/fa";
import { DropdownItem } from "./dropdownItem";

const DropdownEmpresa = ({ onChange, valorGrupoEmpresa, grupoEmpresa }) => {
  const [ aberto, setAberto ] = useState(false);
  const [ arvoreEmpresa, setArvoreEmpresa] = useState([]);
  const [ dadosPequisa, setDadosPesquisa ] = useState("");
  const [ empresaAtual, setEmpresaAtual ] = useState("");
  const [ check, setCheck ] = useState(false);
  const [ valorEmpresaAtual, setValorEmpresaAtual ] = useState(null);

  const dropdownRef = useRef(null);

  const checkElemento = () => {
    const empresasRenderizadas = document.querySelectorAll(".dropdown-body .empresa-container label input[type='radio']");
    
    let empresaSelecionada = valorEmpresaAtual ? valorEmpresaAtual : getGrupoEmpresaAtual();

    if(valorEmpresaAtual) {
      empresaSelecionada = valorEmpresaAtual;
    };

    if(valorGrupoEmpresa && !valorEmpresaAtual) {
      empresaSelecionada = valorGrupoEmpresa;
    };
    
    if(!valorEmpresaAtual && valorGrupoEmpresa > 0) {
      empresaSelecionada = getGrupoEmpresaAtual();
    };

    if(!valorEmpresaAtual && valorGrupoEmpresa == 0) {
      empresaSelecionada = valorGrupoEmpresa;
    }

    empresasRenderizadas.forEach(item => {
      if(empresaSelecionada || empresaSelecionada === valorGrupoEmpresa) {
        setCheck(true);
        const keyElemento = item.getAttribute("data-key");
        if(empresaSelecionada == keyElemento) {
          item.setAttribute("checked", check);
        };
      };
    });
  };
  
  const abrirDropdown = () => {
    setAberto(!aberto);
  };

  const clickForaDropdown = (event) => {
    if(dropdownRef.current !== null && !dropdownRef.current.contains(event.target)) {
      setAberto(false);
    };
  };

  useEffect(() => {
    checkElemento();
  }, [aberto]);

  useEffect(() => {
    let empresas = grupoEmpresa;

    for(let index = 0; index < empresas.length; index++) {
      if(empresas[index].children.length > 0) {
        empresas[index].children.forEach(item => {
          empresas = [...empresas, item];
        });
      }
    };

    const empresaSelecionada =  valorGrupoEmpresa ? valorGrupoEmpresa: getGrupoEmpresaAtual();
    const nomeEmpresa = getNomeEmpresaAtual();

    if(nomeEmpresa === null) {
      empresas.forEach(empresa => {

        if(empresa.value == empresaSelecionada) {
          setEmpresaAtual(empresa.label);
        };
      });
    } else {

      if(nomeEmpresa) {
        empresas.forEach(empresa => {
          if(empresa.value == empresaSelecionada && empresa.label !== nomeEmpresa) {
            setNomeEmpresaAtual(empresa.label)
            setEmpresaAtual(empresa.label);
          };

          if(empresa.value == empresaSelecionada && empresa.label == nomeEmpresa) {
            setEmpresaAtual(empresa.label);
          };

          if(empresa.value == 0) {
            setEmpresaAtual(empresa.label);
          };
        });
      };
    };
  }, []);

  useEffect(() => {
    getEmpresas();
    
    document.addEventListener('click', clickForaDropdown);
  },[]);

  let empresasFiltradas = [];

  let todasEmpresas = grupoEmpresa;

  for (let index = 0; index < todasEmpresas.length; index++) {

    if(todasEmpresas[index].id_pai == null || todasEmpresas[index].id_pai == undefined || todasEmpresas[index].id_pai == "") {
      const id_pai = todasEmpresas[index].value;
      todasEmpresas[index].id_pai = id_pai;
    };

    if(todasEmpresas[index].children.length >= 0) {

      const id_pai = todasEmpresas[index].id_pai;

      todasEmpresas[index].children.forEach((empresa) => {
        empresa.id_pai = id_pai;
        todasEmpresas = [...todasEmpresas, empresa];
      });
    };
  };

  if(dadosPequisa.length > 0 ) {
    empresasFiltradas = todasEmpresas.filter(empresa => empresa.label.toLocaleLowerCase().includes(dadosPequisa.toLocaleLowerCase()));
  };

  const empresasUnicas = new Map();
    empresasFiltradas.forEach(item => {

      if(!empresasUnicas.has(item.id_pai)) {
        empresasUnicas.set(item.id_pai, item)
      };
  });

  let empresasPai = [...empresasUnicas.values()];

  const renderizarPai = (item, index) => {
    const [result] = grupoEmpresa.filter(emp => {
      
      if(item.id_pai == emp.id_pai) {
        return emp;
      }
    })
  return <DropdownItem onchange={onChange} setValorEmpresaAtual={setValorEmpresaAtual} setEmpresaAtual={setEmpresaAtual} testekey={index} item={result} />
}

function getEmpresas(){
  setArvoreEmpresa(grupoEmpresa);
};

  return(
    <div ref={dropdownRef} className="dropdown-empresa-container">
      <div onClick={abrirDropdown} className="dropdown-header">
          <div className="header-empresa">
            <div className="icone-empresa">
              <FaBuilding />
            </div>
            <span className="empresa-selecionada">{empresaAtual}</span>
          </div>

          <FaSyncAlt className="icone-atualiza" onClick={abrirDropdown}/>
      </div>
      {aberto && 
        <div className="dropdown-body">
          <div className="input-container">
            <input type="text" onChange={event => setDadosPesquisa(event.target.value)} value={dadosPequisa}/>
            <FaSearch className="icone-lupa" />
          </div>

        {dadosPequisa.length > 0 ? (
          empresasPai.map((item, index) => {
            return(
              renderizarPai(item, index)
            )
          })
        ) : (
          grupoEmpresa.map((item, index) => {
            return(
              <DropdownItem setValorEmpresaAtual={setValorEmpresaAtual} onchange={onChange} setEmpresaAtual={setEmpresaAtual} key={index} item={item} />
            )
          })
        )}
        </div>}
        
    </div>
  );
};

export { DropdownEmpresa };