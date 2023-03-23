import React from 'react';
import Select from 'react-select';
import {Checkbox} from './';
 
export const MultiSelect = (props) => {
    const converterOptions = () => {
        let options = []
        props.options.map(item => {
            options.push({value: item.id, label: item[props.campoDescricao]})

        })
        return options;
    }
    
    return (
        <div>
            <Select
                options={converterOptions()}
                defaultValue={props.defaultValue || []}
                isDisabled={props.disabled}
                isMulti={true}
                isSearchable={true}
                placeholder="Selecione..."
                onChange={(e) => {
                    let options = []
                    if (e){
                        e.map(item => {
                            let obj = {id: item.value}
                            obj[props.campoDescricao] = item.label
                            options.push(obj)
                        })  
                    }                    
                    if (props.onChange) {
                        props.onChange(options)
                    }
                    
                }}
    
            />
            {/* <Checkbox 
                label="Selecionar Todos"/> */}
        </div> 
    );
}