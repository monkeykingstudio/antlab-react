import React, {useState, useEffect} from 'react';
import './index.scss';
import Output from './output';

const Incrementor = (props) => {

    const [births, setBirths] = useState(0)
    const [death, setDeath] = useState(0)

    useEffect(() => {
       switch (props.id) {
        case 0:
            setBirths(props.major.births);
            setDeath(props.major.death);
            break;
        case 1:
            setBirths(props.media.births);
            setDeath(props.media.death);
            break;
        case 2:
            setBirths(props.minor.births);  
            setDeath(props.minor.death);
            break;
        case 3:
            setBirths(props.breed.births);
            setDeath(props.breed.death);
            break;                                       
        default:
            break;
        }
    },
    [
    props.id, 
    props.major.births,
    props.major.death,
    props.media.births,
    props.media.death,
    props.minor.births,
    props.minor.death,
    props.breed.births,
    props.breed.death
    ]);
    

    const handleDeaths = () => {
        setDeath(death + 1)
    }

    const handleBirths = () => {
        setBirths(births + 1)        
    }

    const setPopulationDeath = (e, f) => {
        props.setPopulationDeath(e, f)
    }

    const setPopulationBirths = (e, f) => {
        props.setPopulationBirths(e, f)
    }

    const save = (f) => {
        props.save(f)
    }

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
           <button onClick={(f)=> {save(props.id)}}>save</button>
        </div>
    );
};

export default Incrementor;
