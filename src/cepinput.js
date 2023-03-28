import React from 'react';
import InputMask from 'react-input-mask';

const CepInput = (props) => (
   
    <InputMask mask="99999-999" value={props.value} onChange={props.onChange} className="form-control">
      {/* {(inputProps) => <Input {...inputProps} type="text"/>} */}
    </InputMask>
  );

export default CepInput;  