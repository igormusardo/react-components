import React from 'react';
import InputMask from 'react-input-mask';
import { Input }  from './input';
 
export const TimeInput = (props) => (
    <InputMask 
      mask="99:99" 
      disabled={props.disabled} 
      value={props.value} 
      onChange={props.onChange} 
      className="form-control">
    </InputMask>
  );