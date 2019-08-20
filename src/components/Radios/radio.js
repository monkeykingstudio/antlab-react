import React from 'react';
import './index.scss';

const Radio = (props) => {
    const onClick = f => f;

    return (
       <div className="radio">
            <input id={props.id} type='radio' selected=''/>
            <label className='radio-label' onClick={onClick} htmlFor={props.id}>{props.entries[props.id]}</label>
       </div>
    );
};

export default Radio;
