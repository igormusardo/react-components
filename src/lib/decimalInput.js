import React from 'react';
import CurrencyInput from 'react-currency-input-field';

export const DecimalInput = (props) => (
  <CurrencyInput
    className="form-control"
    defaultValue={props.value}
    decimalsLimit={2}
    onValueChange={(value) => props.onChange(value)}
  />
);
