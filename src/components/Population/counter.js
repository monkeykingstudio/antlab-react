import React from 'react';
import './index.scss';

import Incrementor from '../Incrementor';

const Counter = (props) => {

    return (    
        <div>
            {props.entries.map((output, i) => (
                <Incrementor
                nbrOutputs={2}
                className='Incrementor'
                key={i}
                id={i}
                datas={[
                    props.entries[0],
                    props.entries[1],
                    props.entries[2],
                    props.entries[3]
                ]}
                />      
            ))}
        </div> 
    );
};

export default Counter;
