import React from 'react';
import './index.scss';

import Incrementor from '../Incrementor';



const Counter = (props) => {

    return (    
        <div>
            {props.entries.map((output, i) => (
                <Incrementor
                nbr={2}
                className='Incrementor'
                key={i}
                id={i}
                />      
            ))}
        </div> 
    );
};

export default Counter;
