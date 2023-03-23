import './style.css'
import { Label } from '../label';
import ReactTooltip from 'react-tooltip';
import { FaQuestionCircle } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

const TooltipQuestionIcon = ({label, tooltip}) => {
    const [labelText, setLabelText] = useState('')
    const [tooltipText, setTooltipText] = useState('')

    useEffect(() => {
        setLabelText(label)
        setTooltipText(tooltip);
    }, [label, tooltip]);

    return (
        <div className='tooltip-css'>
            <Label>{labelText}</Label>
            <a data-for="icon-tooltip" data-tip="">
                <FaQuestionCircle style={{marginLeft: "5px", color: "gray"}} />
            </a>
            <ReactTooltip
                id="icon-tooltip"
                getContent={dataTip => tooltipText}
            />
        </div>
    )
}

export default TooltipQuestionIcon