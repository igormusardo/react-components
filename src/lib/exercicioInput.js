import React from 'react';
import InputMask from 'react-input-mask';

export const ExercicioInput = (props) => (
   
    <InputMask mask="99/9999" value={props.value} onChange={props.onChange} className="form-control">
      {/* {(inputProps) => <Input {...inputProps} type="text"/>} */}
    </InputMask>
  );