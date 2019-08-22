import React from 'react';
import './index.scss';

const Line = (props) => {
    let tagColor = '';

    switch(props.food) {
        case 'sweet liquid':
            tagColor = 'blue'
            break;
        case 'seeds':
            tagColor = 'orange'
            break;
        case 'bug':
            tagColor = 'purple'
            break;
        default:
            console.log('not match!')
    }
   
    return (     
        <div className="line">
            <span className='date'>{props.day}</span>
            <span className={tagColor}>{props.food}</span>
            <div className='right'>
                <span>{props.dayTime}</span>
                <div className="trash icon"></div>
            </div>
        </div>
    );
};

export default Line;
