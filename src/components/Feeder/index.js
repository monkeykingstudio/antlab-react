import React, {useState} from 'react';
import axios from 'axios';
import moment from 'moment';

import './index.scss';
import Select from '../Select'
import Radios from '../Radios';
import History from '../History';

const Feeder = (props) => {

    const [entry, setEntry] = useState({
        "food": "sweet liquid",
        "dayTime": null
    });

    // pouvoir ajouter des aliments
    // pouvoir supprimer ligne
    // days ago sous la date

    const sendUserData = async () => {
        axios.post('http://localhost:4000/feeder', {     
               'food': entry.food,
               'time': entry.dayTime,
               'date': moment().format('L')
        }).then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });   
      
    }

    const handleSubmit = () => {
        sendUserData()
    }

    return (
        <div id={props.id} >
            <form onSubmit={handleSubmit}>
                <span className="title">{props.title}</span>
                <Select 
                options={
                    [
                        'sweet liquid',
                        'seeds',
                        'bug'
                    ]
                } 
                id="Select"
                setFeederFood={(e) => {
                    setEntry(
                        prevState => {
                            return { ...prevState, food: e }
                        }
                    );
                }} 
                />
                <Radios 
                id='Radios' 
                amount={3} 
                setFeederDayTime={(e) => {
                    setEntry(
                        prevState => {
                            return { ...prevState, dayTime: e }
                        }
                    );
                }}
                />
                <History id='History' maxRender={5}/>
                <button type='submit'>Feed!</button>
            </form>
        </div>
    );
};

export default Feeder;
