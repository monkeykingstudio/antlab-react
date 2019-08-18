import React, {useState, useEffect} from 'react';
import './index.scss';

import Option from './option'
import { statement } from '@babel/template';

const Select = (props) => {
    const [selectedValue, setSelectedValue] = useState('select food');
    
    // useEffect(() => {
    //     setSelectedValue('food')
    // });

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
    }

    return (     
       <form>
        <select id={props.id} value={selectedValue} onChange={handleChange}>
                {props.options.map((option, i) => (
                    <Option
                        value={props.options[i]}
                        key={i}
                        id={i}
                    />
                ))}
            </select>
       </form>
    );
};

export default Select;
