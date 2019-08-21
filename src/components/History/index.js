import React, {useState, useEffect} from 'react';
import './index.scss';

const History = (props) => {

    const dbEmpty = true;

    if(!dbEmpty) {
        return (
            <div id={props.id}>
                <div className="line">fsdfsf</div>
                <div className="line">sdfsdf</div>
                <div className="line">sdf</div>
                <div className="line">sdfsdf</div>
                <div className="line">sfsdf</div>
            </div>
         );
    } else {
        return (
            <div id={props.id}>
                <div className="empty">
                    <span>No data to display...</span>
                </div>
            </div>
         );
    }
    
};

export default History;