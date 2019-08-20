import React from 'react';
import './index.scss';
import Feeder from '../Feeder/index';

const Content = (props) => {

    return (
        <div id={props.id}>
            <div className="columns">
                <div className="column is-half-tablet is-one-third-desktop ">
                    <Feeder title='feed ants' id='Feeder'/>
                </div>
            </div> 
        </div>
    );
};

export default Content;
