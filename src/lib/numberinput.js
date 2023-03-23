import React, {useState, useEffect} from 'react';
import { Input as BootstrapInput } from 'reactstrap';

export const NumberInput = (props) => {
  const [valor, setValor] = useState(undefined);

  const _onChange = (e) => {
    let { value, min, max } = e.target;
    
    if (props.inteiro){
      e.target.value = parseInt(value);
      setValor(parseInt(value))
    } else {
      value = parseFloat(value);
      setValor(parseFloat(value))
    }
    
    min = parseFloat(min);
    max = parseFloat(max);

    if (((Number.isNaN(min) || value >= min) && (Number.isNaN(max) || value <= max))) setValor(value);
    else if (!Number.isNaN(min) && value < min) setValor(min);
    else if (!Number.isNaN(max) && value > max) setValor(max);

    if (props.onChange)
      props.onChange(e);
    }

  const _onBlur = (e) => {
    if (props.inteiro){
      setValor(parseInt(e.target.value))
    } else {
      setValor(parseFloat(e.target.value))
    }
    if (props.onBlur)
      props.onBlur(e);
  }

  useEffect(() => {
    // if (!value)
      setValor(props.value);
  },[props.value])

  return (
    <BootstrapInput
      innerRef={props.ref}
      value={valor}
      onChange={_onChange}
      onBlur={_onBlur}
      id={props.id}
      name={props.id}
      placeholder={props.placeholder}
      type="number"
      min={props.min}
      max={props.max}
      onInput={event => {
        if (props.inteiro){
          setValor(parseInt(event.target.value))
        }
      }}
    />
  );
}