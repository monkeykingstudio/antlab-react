import React from 'react';
import './index.scss';

const Output = (props) => {

    return (          
        <div className='output-container'>
            <span className="title">{props.id !== 0 ? 'births' : 'death'}</span>
            <div className="output">
                <span>
                    {
                       props.id !== 0 
                       ? props.births 
                       : props.death
                    }
                </span>
            </div>
        </div>
    );
};

export default Output;
