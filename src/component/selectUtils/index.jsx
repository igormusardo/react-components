import React, { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import DaysOfTheWeek from './DaysOfTheWeek';
import TimeZone from './TimeZone';
import MonthsOfTheYear from './MonthsOfTheYear';
import DaysOfTheMouth from './DaysOfTheMouth';

const SelectUtils = (props) => {
  const { dataType, initilaValue } = props;
  const [data, setData] = useState([]);
  const [valueIndex, setValueIndex] = useState(undefined);

  useEffect(() => {
    cleanData();
    selectDataType();
    handleSelectedData(initilaValue)
  },[]);

  useEffect(() => {
    handleSelectedData(initilaValue);
  },[initilaValue]);

  const selectDataType = useCallback(async () => {
    switch (dataType) {
      case 'days-of-the-week':
        setData(DaysOfTheWeek);
        break;
      case 'timezone':
        TimeZone().then(
          resp => setData(resp)
        )
        break;
      case 'months-of-the-year':
        setData(MonthsOfTheYear);
        break;
      case 'days-of-the-month':
        setData(DaysOfTheMouth);
        break;
      default:
        setData([]);
    }
  },[]);

  const handleSelectedData = (value) => {
    if (value == '') {
      return
    }
    setValueIndex(data.findIndex(item => item.value == value));
  }

  const cleanData = () => setData([]);

  return <Select
    {...props}
    className='select_company_group basic-single'
    classNamePrefix="select"
    placeholder={props.placeholder || 'Selecione uma opção...'}
    value={data[valueIndex]}
    isSearchable={true}
    options={data}
  />;
}

export default SelectUtils;