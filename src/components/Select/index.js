import React, {useState} from 'react';
import './index.scss';

import Option from './option'

const Select = (props) => {
    const initState = props.options[0];
    const [selectedValue, setSelectedValue] = useState(initState);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        props.setFeederFood(e.target.value);
    }

    return (     
        <select id={props.id} value={selectedValue}  onChange={handleChange}>
            {props.options.map((option, i) => (
                <Option
                    value={props.options[i]}
                    key={i}
                    id={i}
                />
            ))}
        </select>
    );
};

export default Select;
