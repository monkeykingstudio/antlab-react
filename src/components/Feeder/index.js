import React from 'react';
import './index.scss';
import Select from '../Select/index'
import Radios from '../Radios';

const Feeder = (props) => {

    return (
        <div id={props.id} >
            <span className="title">{props.title}</span>
            <Select options={
                [
                    'sweet liquid',
                    'seed',
                    'bug'
                ]
            } id="Select" />
            <Radios id='Radios' amount={3}/>
        </div>
    );
};

export default Feeder;
