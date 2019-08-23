import React from 'react';
import './index.scss';
import axios from 'axios';

const Line = (props) => {
    let tagColor = '';
    let dayTime = null;
    let iconDayTime;

    switch(props.dayTime) {
        case 0:
            dayTime = 'morning'
            iconDayTime = 'morning-icon'
            break
        case 1:
            dayTime = 'noon'
            iconDayTime = 'noon-icon'
            break
        case 2:
            dayTime = 'evening'
            iconDayTime = 'evening-icon'
            break
        default:
            return
    }

    switch(props.food) {
        case 'sweet liquid':
            tagColor = 'blue'
            break
        case 'seeds':
            tagColor = 'orange'
            break
        case 'insect':
            tagColor = 'purple'
            break
        default:
            return
    }

    const handleClick = () => {
        axios.delete(`http://localhost:4000/feeder/${props.id}`)
    }
   
    return (     
        <div id={props.id} className="line">
            <div className="left">
                <span className={'daytime ' + iconDayTime}>{dayTime}</span>
                <span className='date'>{props.day}</span>
            </div>
            <div className="middle">
                <span className={tagColor}>{props.food}</span>
            </div>
            <div className='right'>
                <div className="trash icon" onMouseDown={handleClick} onClick={() => props.deleteEntry(props.id)}></div>
            </div>
        </div>
    );
};

export default Line;
