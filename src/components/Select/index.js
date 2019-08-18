import React from 'react';
import './index.scss';

import Option from './option'

const Select = (props) => {
    
   const handleChange = () => {
        console.log("changed!");
    }

    console.log('props options' , props.options);

    return (     
       <form action="">
        <select id={props.id} value={props.options[0]}>
                <Option />
            </select>
       </form>
    );
};

export default Select;
