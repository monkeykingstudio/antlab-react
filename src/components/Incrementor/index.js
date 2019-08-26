import React, {useState} from 'react';
import './index.scss';
import Uuid from 'uuid/v4'
import Button from './button';
import Output from './output';

const Incrementor = (props) => {
    const [value, setValue] = useState({
        "id": Uuid(),
        "minor": 0,
        "media": 0,
        "major": 0,
        "brood": 0
    })

    // get data db puis 

    return (     
        <div className='Incrementor'>
           <Button /> 
           <div className="outputs">
            {[...Array(props.nbr)].map((output, i) => (
                <Output
                key={i}
                id={i}
                />      
            ))}
           </div>
           <button className='red'>reset</button>
        </div>
    );
};

export default Incrementor;
