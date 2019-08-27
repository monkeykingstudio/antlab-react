import React, {useState} from 'react';
import './index.scss';
import Output from './output';

const Incrementor = (props) => {

    const [births, setBirths] = useState(0)
    const [death, setDeath] = useState(0)

    const handleDeaths = () => {
        setDeath(death + 1)
    }

    const handleBirths = () => {
        setBirths(births + 1)        
    }

    const setPopulationDeaths = (e) => {
        console.log(props.id, 'e: ',e)
    }

    const setPopulationBirths = (e) => {
        console.log(props.id, 'e: ',e)
    }

    return (     
        <div className='Incrementor'>
            <div className='inputs'>
                <p className="title">{props.datas[props.id]}</p>
                <div className="grouped-button">
                    <button 
                        onClick={() => {
                        setPopulationDeaths(death);
                        }} 
                        onMouseUp={handleDeaths} type="button">-</button>
                        
                    <button 
                        onClick={() => {
                        setPopulationBirths(births);
                        }}  
                        onMouseUp={handleBirths} type="button">+</button>
                </div>
            </div>

           <div className="outputs">
            {[...Array(props.nbrOutputs)].map((output, i) => (
                <Output
                key={i}
                id={i}
                births={births}
                death={death}
                name={props.datas[props.id]}
                />      
            ))}
           </div>
           <button className='red'>reset</button>
        </div>
    );
};

export default Incrementor;
