import React, {useState} from 'react';
import './index.scss';

import Radio from './radio';

const Radios = (props) => {
    const amount = props.amount;
    const [radioCheck, setRadioCheck] = useState(null);

    const setFeederDayTime = (e) => {
       props.setFeederDayTime(e);
    }

    return (
       <div id={props.id}>
            {[...Array(amount)].map((radio, i) => (
            <Radio
            key={i}
            id={i}
            entries={[
               'morning',
               'noon',
               'evening'
            ]}
            checked={radioCheck === i}
            onClick={() => {
               setFeederDayTime(i)
            }}
            onChange={() => {
               setRadioCheck(i);
            }}
            />
        ))}
       </div>
    );
};

export default Radios;
