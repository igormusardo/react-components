import React from 'react';
import CBadge from '@coreui/react/es/badge/CBadge';
 
const BadgeStatus = (props) => {
  let color = `info`
  let title = ``
  if (props.color == undefined){
    if (props.status == `Ativo` || props.status == 1){
      color = `success`
      title = `Ativo`
    }else{
      color = `danger`
      title = `Desabilitado`
    }
  }else{
    color =  props.color
    title = props.title
  }
    
  return (
    <CBadge 
      {...props}
      color={color}
    >
    {title}
    </CBadge>
  )
};

export default BadgeStatus;