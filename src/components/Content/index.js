import React from 'react';
import './index.scss';
import Feeder from '../Feeder/index';
import Population from '../Population';

const Content = (props) => {

    return (
        <div id={props.id}>
            <div className="columns">
                <div className="column is-half-tablet is-one-third-desktop ">
                    <Feeder title='feed ants' id='Feeder'/>
                </div>

                <div className="column is-half-tablet is-one-third-desktop ">
                    <Population title='Manage population' id='Population'/>
                </div>

            </div> 
        </div>
    );
};

export default Content;
