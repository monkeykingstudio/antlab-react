import React from 'react';
import './index.scss';

const Line = (props) => {
   
    return (     
        <div className="line">
            <span className='date'>{props.day}</span>
            <span>{props.food}</span>
            <span>{props.dayTime}</span>
        </div>
    );
};

export default Line;
