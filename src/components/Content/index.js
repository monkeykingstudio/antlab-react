import React from 'react';
import './index.scss';
import Feeder from '../Feeder/index';

const Content = (props) => {

    return (
        <div id={props.id}>
            <div className="columns">
                <div className="column is-one-quarter">
                    <Feeder title='feed ants' id='Feeder'/>
                </div>
            </div> 
        </div>
    );
};

export default Content;
