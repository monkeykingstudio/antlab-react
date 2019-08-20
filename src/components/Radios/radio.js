import React from 'react';
import './index.scss';

const Radio = (props) => {

const onChange = () => {
    props.onChange();
}
    return (
       <div className="radio">
            <input id={props.id} checked={props.checked} onChange={onChange} type='radio'/>
            <label className='radio-label animated' htmlFor={props.id}>{props.entries[props.id]}</label>
       </div>
    );
};

export default Radio;
