import React from 'react';
import InputMask from 'react-input-mask';

export const PlacaInput = (props) => (
   
    <InputMask 
        mask="***-****" 
        disabled={props.disabled}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className="form-control"
        style={{"text-transform":"uppercase"}}
        maskChar='_'>
    </InputMask>
  );