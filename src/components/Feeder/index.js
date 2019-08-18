import React, {useState} from 'react';
import './index.scss';
import Select from '../Select/index'

const Feeder = (props) => {

    const [selected, setSelected] = useState(0); 

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
        </div>
    );
};

export default Feeder;
