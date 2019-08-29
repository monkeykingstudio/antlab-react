import React from 'react';
import './index.scss';

import Incrementor from '../Incrementor';

const Counter = (props) => {

    const setPopulationDeath= (e, f) => {
        props.setPopulationDeath(e, f);     
    }

    const setPopulationBirths= (e, f) => {
        props.setPopulationBirths(e, f);     
    }

    return (    
        <div>
            {props.entries.map((output, i) => (
                <Incrementor
                setPopulationDeath={(e, f) => {
                    setPopulationDeath(e, f);
                }}
                setPopulationBirths={(e, f) => {
                    setPopulationBirths(e, f);
                }}
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
                major={props.major}
                media={props.media}
                minor={props.minor}
                breed={props.breed}
                />      
            ))}
        </div> 
    );
};

export default Counter;
