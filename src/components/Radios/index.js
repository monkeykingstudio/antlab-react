import React from 'react';
import './index.scss';

import Radio from './radio';

const Radios = (props) => {
    const amount = props.amount;

    return (
       <div id={props.id}>
            {[...Array(amount)].map((radio, i) => (
            <Radio
            key={i}
            id={i}
            entries={[
               'morning',
               'noon',
               'evening'
            ]}
            // selected={i < radiosSelected}
           
            onClick={() => {
               console.log('click!');
            }}
            />
        ))}
       </div>
    );
};

export default Radios;
