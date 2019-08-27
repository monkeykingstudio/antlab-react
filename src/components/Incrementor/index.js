import React, {useState, useEffect} from 'react';
import './index.scss';
import axios from 'axios'
import Output from './output';

const Incrementor = (props) => {

    const [value, setValue] = useState({
        "id": 1,
        "major": [
            {
            "deaths": 1,
            "births": 5
            }
        ],
        "media": [
            {
            "deaths": 10,
            "births": 5
            }
        ],
        "minor": [
            {
            "deaths": 20,
            "births": 10
            }
        ],
        "breed": [
            {
            "deaths": 250,
            "births": 50
            }
        ]
    })

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/population/1'
            );  
                setValue(result.data);
        }; 
        fetchData();
    },[]);

    const handleDeaths = () => {
        console.log(props.id);
        setValue(
            // prevState => {
            //     return { ...prevState, value.major[0]['deaths']: 5000 }
            // }
        )
    }

    const handleBirths = () => {
        console.log(props.id);        
    }

    return (     
        <div className='Incrementor'>
            <div className='inputs'>
                <p className="title">{props.datas[props.id]}</p>
                <div className="grouped-button">
                    <button onClick={handleDeaths} type="button">-</button>
                    <button onClick={handleBirths} type="button">+</button>
                </div>
            </div>

           <div className="outputs">
            {[...Array(props.nbrOutputs)].map((output, i) => (
                <Output
                key={i}
                id={i}
                data={value}
                name={props.datas[props.id]}
                />      
            ))}
           </div>
           <button className='red'>reset</button>
        </div>
    );
};

export default Incrementor;
