import React from 'react';
import './index.scss';

const Radio = (props) => {

const onChange = () => {
    props.onChange();
}

const onClick = () => {
    props.onClick();
}
    return (
       <div className="radio">
            <input id={props.id} checked={props.checked} onClick={onClick} onChange={onChange} type='radio'/>
            <label className='radio-label animated' htmlFor={props.id}>{props.entries[props.id]}</label>
       </div>
    );
};

export default Radio;