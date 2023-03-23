import React, {useState, useEffect} from 'react';
import { Input as BootstrapInput } from 'reactstrap';

export const Input = (props) => {
  const [value, setValue] = useState(undefined);

  const _onChange = (e) => {
    if((props.maxLength != undefined && e.target.value.length <= props.maxLength) || props.maxLength == undefined){
      setValue(e.target.value);
      if (props.onChange){
        props.onChange(e);
      }
    }
  }

  const _onBlur = (e) => {
    if (props.onBlur){
      props.onBlur(e);
    }
  }

  useEffect(() => {
      setValue(props.value);
  },[props.value])

  return (
    <BootstrapInput
      innerRef={props.innerRef}
      value={value}
      onChange={_onChange}
      onBlur={_onBlur}
      id={props.id}
      name={props.id}
      placeholder={props.placeholder}
      type={props.type}
      maxLength={props.maxlength}
    />
  );
}