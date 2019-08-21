import React, {useState, useEffect} from 'react';
import './index.scss';

import Option from './option'

const Select = (props) => {
    const initState = props.options[0];
    const [selectedValue, setSelectedValue] = useState(initState);
    // const [selectedPeriod, setSelectedPeriod] = useState('');
    // const [date, setDate] = useState();
    
    useEffect(() => {

    });

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
