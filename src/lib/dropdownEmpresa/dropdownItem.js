import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";


const DropdownItem = ({ item, onchange, setEmpresaAtual, setValorEmpresaAtual }) => {
  const [ aberto, setAberto ] = useState(false);

  const atualizarOsDados = (event) => {
    onchange(event, item);
    setEmpresaAtual(item.label);
    setValorEmpresaAtual(item.value)
  };
  
  if(item.children.length > 0) {
    return(
      <div className={aberto ? "open empresa-container" : "empresa-container"}>
         <div className="empresa-pai">
           <label className="label-empresa">
             <input disabled={item.disabled} data-key={item.value} onChange={atualizarOsDados} type="radio" name="empresa"/>
             <span title={item.label}>{item.label}</span>
           </label>
           <FaAngleDown onClick={() => setAberto(!aberto)} className={aberto ? "open btn-arrowdown" : "btn-arrowdown"}/>
         </div>
   
         <div className="empresa-filha">
           {item.children.map((item, index) => {
            return (
              <DropdownItem setValorEmpresaAtual={setValorEmpresaAtual} onchange={onchange} setEmpresaAtual={setEmpresaAtual} key={index} item={item}/>
            )
           })}
         </div>
      </div>
     );
  } else {
    return (
        <div className={aberto ? "open empresa-container" : "empresa-container"}>
           <div className="empresa-pai">
             <label className="label-empresa">
               <input disabled={item.disabled} data-key={item.value}  onChange={atualizarOsDados} type="radio" name="empresa"/>
               <span>{item.label}</span>
             </label>
           </div>
        </div>
    );
  };
};

export {DropdownItem};