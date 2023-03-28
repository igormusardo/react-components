import React from 'react';
import InputMask from 'react-input-mask';

const CpfInput = (props) => (   
  <InputMask 
    mask="999.999.999-99" 
    value={props.value} 
    onChange={props.onChange} 
    className="form-control"
    maskChar='_'>
  </InputMask>
);

export default CpfInput;