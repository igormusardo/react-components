import React, { useState, useRef, useEffect }  from 'react';
import InputMask from 'react-input-mask';
import { findDOMNode } from 'react-dom';
import { formatarData, formatarDataToUtc } from './helpers/formatacoes/datas';

export const DateTimeInput = (props) => {
  const [valor, setValor] = useState(undefined);

  let myInput = useRef();

  const formatarDataUs = (dataInput) => {
    let data = dataInput.split(" ")[0];
    let hora = dataInput.split(" ")[1];
    let dia = data.split('/')[0];
    let mes = data.split('/')[1];
    let ano = data.split('/')[2];

   
    try{
      return formatarDataToUtc(ano+'-'+mes+'-'+dia+' '+hora)
    } catch (e){
      throw "Data Inválida";
    }

  }

  const formatarDataBr = (dataInput) => {
    if (typeof(dataInput) == 'object'){
      return formatarData(dataInput);
    } else if (dataInput.includes('T')){
      return formatarData(dataInput);
    } else {
      try{
        let data = dataInput.split(" ")[0];
        let hora = dataInput.split(" ")[1];
        let ano = data.split('-')[0];
        let mes = data.split('-')[1];
        let dia = data.split('-')[2];
      
      
        return formatarData(`${ano}-${mes}-${dia}T${hora}Z`)
      } catch (e){
        return undefined;
        
      }
    }
  }

  const validarData = (dataInput) => {
    try{
      let novaData = formatarDataUs(dataInput);
      return new Date(novaData) != 'Invalid Date';
    } catch (e){
      return false;
      
    }
  }

  const onChange = (e) => {
    setValor(e.target.value);
  }

  useEffect(() => { 
    if (props.value){
      setValor(formatarDataBr(props.value))
    }else{
      setValor('')
    }
    
  }, [props.value])

  const onBlur = (e) => {
    props.onChange(e.target.value);
    if (e.target.value != ''){
      try{
        let novaData = formatarDataUs(e.target.value);
        if (!validarData(e.target.value)){
          if (props.erro){
            props.erro('Data Inválida')
          }else{
            alert('Data Inválida')
          }
          myInput.focus();
          e.target.value = ''
          
        }         
        else {
          if (props.onChange) {
            props.onChange(novaData);
          }
        } 
      } catch (e){
        myInput.focus();
        if (props.erro){
          props.erro('Data Inválida')
        }else{
          alert('Data Inválida')
        }
      }
    }
    else{
      props.onChange(null);
    }
    
  }

  const formatChars = {
    n: '[0-1]',
    m: '[0-9]',
    e: '[0-3]',
    d: '[0-9]',
    z: '[1-2]',
    y: '[0-9]',
    h: '[0-2]',
    j: '[0-6]'
  }


  return (<InputMask 
    formatChars={formatChars}
    mask="ed/nm/zyyy hd:jd"
    // mask="99/99/9999 99:99" 
    value={valor} 
    onChange={onChange} 
    onBlur={onBlur}
    className="form-control"
    // ref={myInp ut}
    // ref={(el) => { myInput = el; }}
    ref={ref => myInput = findDOMNode(ref)}
    >
 </InputMask>);
}