import React, {useState} from 'react';
import './index.scss';
import Output from './output';

const Incrementor = (props) => {

    const [births, setBirths] = useState(0)
    const [death, setDeath] = useState(0)

    const handleDeath = () => {
        setDeath(death + 1)
    }

    const handleBirth = () => {
        setBirths(births + 1)        
    }

    return (     
        <div className='Incrementor'>
            <div className='inputs'>
                <p className="title">{props.datas[props.id]}</p>
                <div className="grouped-button">
                    <button onClick={handleDeath} type="button">-</button>
                    <button onClick={handleBirth} type="button">+</button>
                </div>
            </div>

           <div className="outputs">
            {[...Array(props.nbrOutputs)].map((output, i) => (
                <Output
                key={i}
                id={i}
                births={births}
                death={death}
                // data={value}
                name={props.datas[props.id]}
                />      
            ))}
           </div>
           <button className='red'>reset</button>
        </div>
    );
};

export default Incrementor;
