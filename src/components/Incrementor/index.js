import React, {useState, useEffect} from 'react';
import './index.scss';
import Output from './output';

const Incrementor = (props) => {

    let bindValue;
    switch (props.id) {
        case 0:
            bindValue = props.major;
            break;
        case 1:
            bindValue = props.media;
            break;
        case 2:
            bindValue = props.minor;
            break;
        case 3:
            bindValue = props.breed;
            break;                                       
        default:
            break;
    }

    const [births, setBirths] = useState(
        0
    )
    const [death, setDeath] = useState(
        bindValue.death
    )

    useEffect(() => {
    //    setBirths(props.major.births)
       switch (props.id) {
        case 0:
            setBirths(props.major.births);
            break;
        case 1:
            setBirths(props.media.births);
            break;
        case 2:
            bindValue = props.minor;
            break;
        case 3:
            bindValue = props.breed;
            break;                                       
        default:
            break;
    }
      });


    const handleDeaths = () => {
        setDeath(death + 1)
    }

    const handleBirths = () => {
        setBirths(births + 1)        
    }

    const setPopulationDeath = (e, f) => {
        console.log('DEATH ID INC', f, ' e: ',e)
        props.setPopulationDeath(e, f)
    }

    const setPopulationBirths = (e, f) => {
        console.log('BIRTH ID INC', f, ' e: ',e)
        props.setPopulationBirths(e, f)
    }

    
    console.log('bind value: ', bindValue)
    console.log(births)
    return (     
        <div className='Incrementor'>
            <div className='inputs'>
                <p className="title">{props.datas[props.id]}</p>
                <div className="grouped-button">
                    <button 
                        onClick={(e, f) => {
                            setPopulationDeath(death, props.id);
                        }} 
                        onMouseUp={handleDeaths} type="button">-</button>
                        
                    <button 
                        onClick={(e, f) => {
                            setPopulationBirths(births, props.id);
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
