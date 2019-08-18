import React from 'react';
import './index.scss';

const Feeder = (props) => {

    return (
        <div id={props.id}>
            <span className="title">{props.title}</span>
        </div>
    );
};

export default Feeder;
